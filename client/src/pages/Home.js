import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import Analatics from "../components/Analatics";
import "../resources/transactions.css";
import { ContainerOutlined, BarChartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { message, Select, Table } from "antd";
import axios from "axios";
import Spinner from "../components/Spinner";
import AddEditTransaction from "../components/AddEditTransaction";
import { DatePicker } from "antd";
import moment from 'moment';
const { RangePicker } = DatePicker;

function Home() {
  const [loading, setLoading] = useState(false);
  const [transactionsData, setTransactionsData] = useState([]);
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [frequency, setFrequency] = useState("7");
  const [selectedRange, setSelectedRange] = useState([]);
  const [type, setType] = useState("all");
  const [viewType, setViewType] = useState("table");

  const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("expensetracker-dev-user"));
      setLoading(true);
      const response = await axios.post(
        "/api/transactions/get-all-transactions",
        {
          userid: user._id,
          frequency,
          ...(frequency === "custom" && { selectedRange }),
          type,
        }
      );
      setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  const deleteTransaction = async (record) => {
    try {
      setLoading(true);
      await axios.post("/api/transactions/delete-transaction", {
        transactionId: record._id,
      });
      message.success("Transaction Deleted successfully");
      getTransactions();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getTransactions();
  }, [frequency, selectedRange, type]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => (
        <label>{moment(date).format("YYYY-MM-DD")}</label>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div>
          <EditOutlined
            onClick={() => {
              setSelectedItemForEdit(record);
              setShowAddEditTransactionModal(true);
            }}
          />
          <DeleteOutlined className="mx-3" onClick={() => deleteTransaction(record)} />
        </div>
      ),
    },
  ];

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <div className="filter d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>Select Frequency</h6>
            <Select value={frequency} onChange={(value) => setFrequency(value)}>
              <Select.Option value="7">Last 1 Week</Select.Option>
              <Select.Option value="30">Last 1 Month</Select.Option>
              <Select.Option value="365">Last 1 Year</Select.Option>
              <Select.Option value="custom">Customize</Select.Option>
            </Select>

            {frequency === "custom" && (
              <div className="mt-2">
                <RangePicker
                  value={selectedRange}
                  onChange={(values) => setSelectedRange(values)}
                />
              </div>
            )}
          </div>

          <div className="d-flex flex-column mx-5">
            <h6>Select Type</h6>
            <Select value={type} onChange={(value) => setType(value)}>
              <Select.Option value="all">ALL</Select.Option>
              <Select.Option value="income">INCOME</Select.Option>
              <Select.Option value="expense">EXPENSE</Select.Option>
            </Select>
          </div>
        </div>

        <div className="d-flex">
          <div className="view-switch mx-5">
            <ContainerOutlined
              className={`mx-3 ${viewType === "table" ? "active-icon" : "inactive-icon"}`}
              onClick={() => setViewType("table")}
              size={30}
            />
            <BarChartOutlined
              className={`${viewType === "analytics" ? "active-icon" : "inactive-icon"}`}
              onClick={() => setViewType("analytics")}
              size={30}
            />
          </div>

          <button
            className="primary"
            onClick={() => setShowAddEditTransactionModal(true)}
          >
            +
          </button>
        </div>
      </div>

      <div className="SomeSpaceBetweenPanelAnData"></div>

      <div className="table-analtics">
        {viewType === "table" ? (
          <div className="table">
            <Table columns={columns} dataSource={transactionsData} />
          </div>
        ) : (
          <Analatics transactions={transactionsData} />
        )}
      </div>

      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          selectedItemForEdit={selectedItemForEdit}
          getTransactions={getTransactions}
          setSelectedItemForEdit={setSelectedItemForEdit}
        />
      )}
    </DefaultLayout>
  );
}

export default Home;


