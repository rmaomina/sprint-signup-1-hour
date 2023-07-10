import React, { useState } from "react";
import FormInput from "../components/FormInput";
import SelectBox from "../components/SelectBox";
import Checkbox from "../components/Checkbox";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    business: "",
    interests: [],
  });

  const inputFields = [
    {
      id: 1,
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "이름을 입력하세요",
      pattern: "^[A-Za-z0-9]{2,}$",
      errorText: "2자 이상 영문으로 작성해 주세요",
      required: true,
    },
    {
      id: 2,
      name: "company",
      label: "Company",
      type: "text",
      placeholder: "회사명을 입력하세요",
      required: false,
    },
    {
      id: 3,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "이메일을 입력하세요",
      errorText: "올바른 이메일 형식을 입력해 주세요",
      required: true,
    },
    {
      id: 4,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorText: "9자 이상 특수문자를 포함해 주세요",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "",
      pattern: values.password,
      errorText: "비밀번호가 동일하지 않습니다",
      required: true,
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();

    const errors = {};

    if (Object.keys(errors).length === 0) {
      // Submit Form
      console.log("Form Submit");
    }
  };

  const onChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const onChangeSelectBox = ({ target: { value } }) => {
    setValues({ ...values, business: value });
  };

  const onChangeCheckbox = ({ target: { value, checked } }) => {
    setValues({
      ...values,
      interests: checked
        ? [...values.interests, value]
        : values.interests.filter(el => el !== value),
    });
  };

  return (
    <main className="signup">
      <div className="signup-wrapper">
        <div className="signup-header">Signup</div>
        <div className="signup-body">
          <div className="intro">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <p className="sub">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="form">
            <form
              onSubmit={handleSubmit}
              noValidate
            >
              {inputFields.map(input => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  errorText={input.errorText}
                  onChange={onChange}
                />
              ))}
              <hr />
              <div className="form-row">
                <SelectBox
                  label="Business"
                  onChange={onChangeSelectBox}
                  options={["B2B", "B2C", "B2B2C"]}
                  required
                />
              </div>
              <div className="form-row">
                <Checkbox
                  label="Interests"
                  onChange={onChangeCheckbox}
                  options={[
                    "HTML",
                    "CSS",
                    "Javascript",
                    "React",
                    "Vue",
                    "Next",
                  ]}
                  selectedOptions={values.interests}
                />
              </div>
              <div className="form-row">
                <button className="btn-submit active">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
