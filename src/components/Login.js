import React from "react";
import styled from "styled-components";

const LoginWrap = styled.div`

`

const LoginContainer = styled.div`
    margin:0 auto;
    width: 1130px;
`

const LoginBox = styled.div`
    margin:3rem auto;
    padding:2rem;
    width:400px;

    border-radius:1rem;
`

const LoginForm = styled.form`
`

const LoginInputWrap = styled.dl`
    margin: 1rem 0;
`

const LoginInputName = styled.dt`
    margin-bottom:0.25rem;
    width:100%;
    font-size:0.8rem;
`

const LoginInputBox = styled.dd`
    width:100%;
`

const LoginButton = styled.button`
    text-align:center;
    background:#00CE75;
    color:#fff;
`

function Login(){
    return(
        <LoginWrap>
        <LoginContainer>
            <LoginBox>
                <LoginForm>
                    <LoginInputWrap>
                        <LoginInputName><label htmlFor="id">아이디</label></LoginInputName>
                        <LoginInputBox><input type="text" name="id" className="input-style"/></LoginInputBox>
                    </LoginInputWrap>
                    <LoginInputWrap>
                        <LoginInputName><label htmlFor="pwd">비밀번호</label></LoginInputName>
                        <LoginInputBox><input type="text" name="pwd" className="input-style"/></LoginInputBox>
                    </LoginInputWrap>
                    <LoginButton className="login-button">로그인</LoginButton>
                </LoginForm>
            </LoginBox>
        </LoginContainer>
        </LoginWrap>
    )
}

export default Login;