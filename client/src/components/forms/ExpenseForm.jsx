import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const ExpenseForm = ({
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState({
      amount: "",
      category: "Food",
      description: "",
      date: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      amount: "",
      category: "Food",
      description: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        label="Amount"
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        >
          <option>Food</option>
          <option>Rent</option>
          <option>Travel</option>
          <option>Entertainment</option>
          <option>Shopping</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Utilities</option>
          <option>Other</option>
        </select>
      </div>

      <Input
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <Input
        label="Date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <Button type="submit">
        Add Expense
      </Button>
    </form>
  );
};

export default ExpenseForm;