import { updatesInputProps } from "@/lib/types";
import Button from "./Button";

export default function UpdatesInput({
  inputType,
  placeholder,
  buttonName,
  inputTitle,
  btnSubmitAction,
}: updatesInputProps) {
  return (
    <div className="w-full lg:w-[40vw] flex justify-center md:justify-between items-center px-[var(--spacing-10)] md:px-[var(--spacing-12)] py-[5px] border md:py-[8px] border-[var(--colors-black-15)] text-base md:text-xl rounded-full">
      <form className="w-[100%] md:flex md:gap-5">
        <input
          type={inputType}
          placeholder={placeholder}
          name={inputTitle}
          className="w-[50%] md:w-[50%] outline-none"
        />
        <Button
          className="w-[50%] md:w-[50%] md:hidden"
          size="sm"
          variant="filled"
          onClick={btnSubmitAction}
        >
          {buttonName}
        </Button>
        <Button
          className="hidden md:block md:w-[50%] hidden"
          variant="filled"
          onClick={btnSubmitAction}
        >
          {buttonName}
        </Button>
      </form>
    </div>
  );
}
