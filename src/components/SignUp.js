import React from "react";
import styled from "styled-components";

const SignUpWrap = styled.div`

`

const SignUpContainer = styled.div`
    margin:0 auto;
    width: 1130px;
`

const SignUpBox = styled.div`
    margin:3rem auto;
    padding:2rem;
    width:400px;

    border-radius:1rem;
`

const SignUpForm = styled.form`
`

const SignUpInputWrap = styled.dl`
    margin: 1rem 0;
`

const SignUpInputName = styled.dt`
    margin-bottom:0.25rem;
    width:100%;
    font-size:0.8rem;
`

const SignUpInputBox = styled.dd`
    width:100%;
`

const SignUpInputFlexBoxWrap = styled.dd`
    display:flex;
    width:100%;
`

const SignUpInputFlexBox = styled.div`
    margin-right:0.5rem;
    font-size:0.8rem;
    
`

const SignUpButton = styled.button`
    text-align:center;
    background:#00CE75;
    color:#fff;
`

function SignUp(){
    return(
        <SignUpWrap>
        <SignUpContainer>
            <SignUpBox>
            <SignUpForm>

            <SignUpInputWrap>
                <SignUpInputName><label htmlFor="id">아이디</label></SignUpInputName>
                <SignUpInputBox><input type="text" name="id" className="input-style"/></SignUpInputBox>
            </SignUpInputWrap>

            <SignUpInputWrap>
                <SignUpInputName><label htmlFor="pwd">비밀번호</label></SignUpInputName>
                <SignUpInputBox><input type="text" name="pwd" className="input-style"/></SignUpInputBox>
            </SignUpInputWrap>

            <SignUpInputWrap>
                <SignUpInputName><label htmlFor="pwdcheck">비밀번호 확인</label></SignUpInputName>
                <SignUpInputBox><input type="text" name="pwdcheck" className="input-style"/></SignUpInputBox>
            </SignUpInputWrap>

            <SignUpInputWrap>
                <SignUpInputName><label htmlFor="name">닉네임</label></SignUpInputName>
                <SignUpInputBox><input type="text" name="name" className="input-style"/></SignUpInputBox>
            </SignUpInputWrap>

            <SignUpInputWrap>
                <SignUpInputName><label htmlFor="tel">전화번호</label></SignUpInputName>
                <SignUpInputFlexBoxWrap>
                    <SignUpInputFlexBox><input type="text" name="name" className="input-style"/></SignUpInputFlexBox>
                    <SignUpInputFlexBox> - </SignUpInputFlexBox>
                    <SignUpInputFlexBox><input type="text" name="name" className="input-style"/></SignUpInputFlexBox>
                    <SignUpInputFlexBox> - </SignUpInputFlexBox>
                    <SignUpInputFlexBox><input type="text" name="name" className="input-style"/></SignUpInputFlexBox>
                </SignUpInputFlexBoxWrap>
            </SignUpInputWrap>

            <SignUpInputWrap>
                <SignUpInputName><label htmlFor="name">관심사</label></SignUpInputName>
                <SignUpInputFlexBoxWrap>
                    <SignUpInputFlexBox>
                        <input type="checkbox" name="likeplants" id="foliage" value="foliage"/>
                        <label htmlFor="foliage">관엽식물</label>
                    </SignUpInputFlexBox>
                    <SignUpInputFlexBox>
                        <input type="checkbox" name="likeplants"  id="flower" value="flower"/>
                        <label htmlFor="flower">꽃</label>
                    </SignUpInputFlexBox>
                    <SignUpInputFlexBox>
                        <input type="checkbox" name="likeplants"  id="tree" value="tree"/>
                        <label htmlFor="tree">나무</label>
                    </SignUpInputFlexBox>
                    <SignUpInputFlexBox>
                        <input type="checkbox" name="likeplants"  id="herb" value="herb"/>
                        <label htmlFor="herb">허브</label>
                    </SignUpInputFlexBox>
                    <SignUpInputFlexBox>
                        <input type="checkbox" name="likeplants"  id="seed" value="seed"/>
                        <label htmlFor="seed">씨앗</label>
                    </SignUpInputFlexBox>
                    <SignUpInputFlexBox>
                        <input type="checkbox" name="likeplants"  id="etc" value="etc"/>
                        <label htmlFor="etc">기타</label>
                    </SignUpInputFlexBox>
                </SignUpInputFlexBoxWrap>
            </SignUpInputWrap>

            <SignUpButton className="login-button">ㄱㄱ</SignUpButton>

            </SignUpForm>
            </SignUpBox>
        </SignUpContainer>
        </SignUpWrap>
    )
}

export default SignUp;