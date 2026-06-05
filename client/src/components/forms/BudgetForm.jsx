import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const BudgetForm = ({
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState({
      month: "",
      category: "Food",
      amount: "",
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
      month: "",
      category: "Food",
      amount: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        label="Month"
        name="month"
        placeholder="2026-06"
        value={formData.month}
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
        label="Budget Amount"
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <Button type="submit">
        Create Budget
      </Button>
    </form>
  );
};

export default BudgetForm;