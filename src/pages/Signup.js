import React, { useState, useEffect } from "react";
import Input from "../components/signup/Input";
import SelectBox from "../components/signup/SelectBox";
import MultiCheckbox from "../components/signup/MultiCheckbox";

const Signup = () => {
  // Field Values
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [business, setBusiness] = useState("");

  // Field Validation
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [businessValid, setBusinessValid] = useState(false);

  const [isAllValid, setIsAllValid] = useState(false);

  const handleSubmit = () => {
    if (isAllValid) {
      // Submit
    }
  };

  useEffect(() => {
    if (
      nameValid &&
      emailValid &&
      passwordValid &&
      confirmPasswordValid &&
      businessValid
    ) {
      setIsAllValid(true);
    } else {
      setIsAllValid(false);
    }
  }, [
    nameValid,
    emailValid,
    passwordValid,
    confirmPasswordValid,
    businessValid,
  ]);

  const handleNameChange = e => {
    setName(e.target.value);

    if (/^[^\d]{1,}/g.test(name)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const handleCompanyChange = e => {
    setCompany(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);

    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);

    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/.test(
        password,
      )
    ) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);

    if (password === confirmPassword) {
      setConfirmPasswordValid(true);
    } else {
      setConfirmPasswordValid(false);
    }
  };

  const handleBusinessChange = e => {
    setBusiness(e.target.value);

    if (business !== "") {
      setBusinessValid(true);
    } else {
      setBusinessValid(false);
    }
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
            <form onSubmit={handleSubmit}>
              <div className="form-row half">
                <Input
                  id="name"
                  label="Name"
                  placeholder="이름을 입력하세요"
                  value={name}
                  onChangeHandle={handleNameChange}
                  error={!nameValid}
                  errorText="첫 글자는 문자로 입력해 주세요"
                  required
                />
                <Input
                  id="company"
                  label="Company Name"
                  placeholder="회사명을 입력하세요"
                  value={company}
                  onChangeHandle={handleCompanyChange}
                />
              </div>
              <div className="form-row">
                <Input
                  id="email"
                  label="Email"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChangeHandle={handleEmailChange}
                  error={!emailValid}
                  errorText="올바른 이메일을 입력해 주세요"
                  required
                />
              </div>
              <div className="form-row">
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  value={password}
                  placeholder="*********"
                  error={!passwordValid}
                  errorText="9자 이상 특수문자와 숫자를 포함해 주세요"
                  onChangeHandle={handlePasswordChange}
                  required
                />
              </div>
              <div className="form-row">
                <Input
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  placeholder="*********"
                  error={!confirmPasswordValid}
                  errorText="입력한 비밀번호와 같지 않습니다"
                  onChangeHandle={handleConfirmPasswordChange}
                  required
                />
              </div>
              <hr />
              <div className="form-row">
                <SelectBox
                  id="selectBox"
                  label="Business"
                  error={!businessValid}
                  errorText="비즈니스 유형을 선택하세요"
                  onChnageHandle={handleBusinessChange}
                  required
                />
              </div>
              <div className="form-row">
                <MultiCheckbox
                  label="Interests"
                  id="multiCheckbox"
                />
              </div>
              <div className="form-row">
                <button className={`form-btn ${isAllValid ? "active" : ""}`}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
