import React, { useState } from "react";
import styled from "styled-components";
import NavClose from "../assets/images/nav-close.png"
import NavIcon from "../assets/images/nav-icon.png"

const HeaderWrap = styled.header`
`

const HeaderLogo = styled.div`
    overflow:hidden; 
    height:100px; 
    border-bottom:1px solid #eee;

    h1{ font-weight:700; font-size:24px; line-height:100px; }
    ul li{ display:inline-block; }
    ul li::after{ content:"·";  }
    ul li:last-child::after{ content:"";  }
    ul li a{ font-size:13px; padding:0 5px; }
`

const HeaderNavWrap = styled.div`
    height:56px; 
    border-bottom:1px solid #eee;
`

const HeaderNav = styled.div`
    float:left;
    width:800px;
    input[type=checkbox]{ display:none; }
    input[type=checkbox]+label{ background:url(${NavIcon}) no-repeat; padding:1px 13px; }
    input[type=checkbox]:checked+label{ background:url(${NavClose}) no-repeat; padding:0px 13px; }
    p{ float:left; display:block; padding-right:35px; line-height: 54px; }
    ul li{ display:inline-block; line-height:55px; padding:0 25px; }
    ul li a{ font-size:15px; }
`

const HeaderContainer = styled.div`
    margin: 0 auto;
    width: 1130px;
`

const SitemapWrap = styled.div`
    overflow:hidden; 
    width:100%; 
    background:#fff; 
    top:156px; 
    position:absolute; 
    border-bottom:1px solid #eee; 
    z-index:9999;
`

const Sitemap = styled.div`
    p{ float:left; width:40px; height:1px; }
`

function Header(){

    let [Sitemap, setSitemap] = useState(false);

    return(
        <HeaderWrap>
            <HeaderLogo>
                <HeaderContainer>
                <div className="row space-between flex-center">
                    <h1><a href="index.html">PLANTS LOVE</a></h1>
                    <ul>
                        <li><a href="login.html">로그인</a></li>
                        <li><a href="">비회원주문조회</a></li>
                    </ul>
                </div>
                </HeaderContainer>
            </HeaderLogo>
            <HeaderNavWrap>
                <HeaderContainer>
                    <HeaderNav>
                    <p> 
                        <input type="checkbox" name="nav-icon" id="nav-icon" />
                        <label htmlFor="nav-icon" onClick={()=> Sitemap === true ? setSitemap(false): setSitemap(true)}><span></span></label>
                    </p>
                    <ul className="test">
                        <li><a href="store.html">스토어</a></li>
                        <li><a href="">물물교환</a></li>
                        <li><a href="">가까운꽃집찾기</a></li>
                        <li><a href="">커뮤니티</a></li>
                    </ul>
                    </HeaderNav>
                </HeaderContainer>
            </HeaderNavWrap>

            { Sitemap === true ? <NavSite />: null }

        </HeaderWrap>
    )
}

function NavSite() {
    return (
        <SitemapWrap>
            <Sitemap>
            <HeaderContainer>
                <ul className="main-nav-con sitemap-store">
                <li className="main-nav-tit">스토어</li>
                <li><a href="store.html">스토어홈</a></li>
                <li><a href="store-category.html">카테고리</a></li>
                <li><a href="">베스트</a></li>
                </ul>
                <ul className="main-nav-con sitemap-change">
                <li className="main-nav-tit">물물교환</li>
                <li><a href="">물물교환홈</a></li>
                </ul>
                <ul className="main-nav-con sitemap-find">
                <li className="main-nav-tit">가까운꽃집찾기</li>
                <li><a href="">내주변꽃집</a></li>
                </ul>
                <ul className="main-nav-con sitemap-comm">
                <li className="main-nav-tit">커뮤니티</li>
                <li><a href="">커뮤니티홈</a></li>
                </ul>
            </HeaderContainer> 
            </Sitemap> 
        </SitemapWrap> 
    );
}
  

export default Header;