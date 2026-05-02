import { Select } from "@chakra-ui/react";
const Payment = () => {
  return (
    <Select placeholder="Select Payment method">
      <option value="option1">Bkash</option>
      <option value="option2">Nagad</option>
      <option value="option3">Bank Transfer</option>
    </Select>
  );
};
export default Payment;
