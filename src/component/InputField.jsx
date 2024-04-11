import { Label, TextInput } from "flowbite-react";

export const InputField = ({ type, placeholder, name ,register}) => {
  
  return (
    <>
      <div className="mb-2">
        <Label htmlFor={name} className="capitalize">
          Your {name}
        </Label>
      </div>
      <div className="mb-2  ">
        <TextInput id={name} type={type} placeholder={placeholder} className="w-[80%]"  {...register(name)} />
      </div>
  
    </>
  );
};
