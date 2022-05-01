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

const HeaderTop = styled.div`
    clear:both; 
    display:flex; 
    justify-content: space-between;
    align-items:center;
    margin-right:-10px; 
    margin-left: -10px;
    box-sizing: border-box; 

    h1{ font-size:24px; line-height:100px; }
    ul li{ display:inline-block; }
    ul li::after{ content:"·";  }
    ul li:last-child::after{ content:"";  }
    ul li a{ font-size:13px; padding:0 5px; }
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
    display:flex;
    padding:1.5rem 0;
    p{ float:left; width:40px; height:1px; }
`

const SitemapBox = styled.ul`
    width:25%;
    text-align:center;
`

const SitemapBoxTit = styled.li`
    padding-bottom:1rem; 
    font-size:18px; 
    font-weight:bold; 
    color:#00AE0C;
`

const SitemapBoxList = styled.li`
    padding:0.25rem 0;
`

function Header(){

    let [Sitemap, setSitemap] = useState(false);

    return(
        <HeaderWrap>
            <HeaderLogo>
                <HeaderContainer>
                    <HeaderTop>
                        <h1><a href="index.html">PLANTS LOVE</a></h1>
                        <ul>
                            <li><a href="login.html">로그인</a></li>
                            <li><a href="">비회원주문조회</a></li>
                        </ul>
                    </HeaderTop>
                </HeaderContainer>
            </HeaderLogo>
            <HeaderNavWrap>
                <HeaderContainer>
                    <HeaderNav>
                    <p> 
                        <input type="checkbox" name="nav-icon" id="nav-icon" />
                        <label htmlFor="nav-icon" onClick={()=> Sitemap === true ? setSitemap(false): setSitemap(true)}><span></span></label>
                    </p>
                    <ul>
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
            <HeaderContainer>
                <Sitemap>
                    <SitemapBox>
                        <SitemapBoxTit>스토어</SitemapBoxTit>
                        <SitemapBoxList><a href="store.html">스토어홈</a></SitemapBoxList>
                        <SitemapBoxList><a href="store-category.html">카테고리</a></SitemapBoxList>
                        <SitemapBoxList><a href="">베스트</a></SitemapBoxList>
                    </SitemapBox>
                    <SitemapBox>
                        <SitemapBoxTit>물물교환</SitemapBoxTit>
                        <SitemapBoxList><a href="">물물교환홈</a></SitemapBoxList>
                    </SitemapBox>
                    <SitemapBox>
                        <SitemapBoxTit>가까운꽃집찾기</SitemapBoxTit>
                        <SitemapBoxList><a href="">내주변꽃집</a></SitemapBoxList>
                    </SitemapBox>
                    <SitemapBox>
                        <SitemapBoxTit>커뮤니티</SitemapBoxTit>
                        <SitemapBoxList><a href="">커뮤니티홈</a></SitemapBoxList>
                    </SitemapBox>
                </Sitemap> 
            </HeaderContainer> 
        </SitemapWrap> 
    );
}
  

export default Header;