import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const GoalForm = ({
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState({
      title: "",
      targetAmount: "",
      targetDate: "",
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
      title: "",
      targetAmount: "",
      targetDate: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        label="Goal Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <Input
        label="Target Amount"
        type="number"
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
      />

      <Input
        label="Target Date"
        type="date"
        name="targetDate"
        value={formData.targetDate}
        onChange={handleChange}
      />

      <Button type="submit">
        Create Goal
      </Button>
    </form>
  );
};

export default GoalForm;