var CmpHeader = {
    data : () => {
        return {
            headerMenu : ["ABOUT", "MOVIE", "ARTIST", "AUDITION", "COMMUNITY"]
        }
    },
    template : `
        <header>
            <div class="wrap">
                <div class="logo">
                    <a href="#"></a>
                </div>
                <div class="menu">
                    <ul>
                        <li v-for="list in headerMenu"><a href="#">{{list}}</a></li>
                    </ul>
                </div>
            </div>
        </header>
    `
}

var CmpBannerTop = {
    template : `
        <div id="banner_top">
            <div class="wrap">
                <div class="txt">
                    <h2>지금부터 당신의 영화가 <br> 시작됩니다</h2>
                    <a href="#">오디션 참가</a>
                </div>
            </div>
        </div>
    `
}

var CmpCont1 = {
    data : () => {
        return {
            todayMovie : [
                ["cont_01.png", "죄 많은 소녀 (After My Death, 2019)"],
                ["cont_02.jpeg", "소공녀 (Microhabitat, 2020)"],
                ["cont_03.jpg", "벌새 (House of Hummingbird, 2018)"],
            ]
        }
    },
    template : `
        <div id="cont01">
            <div class="wrap">
                <h2>Today's Movie</h2>
                <div class="content">
                    <div class="box" v-for="cont1 in todayMovie">
                        <div class="img">
                            <img :src="'./img/'+cont1[0]" alt="">
                            <span class="play_icon"></span>
                        </div>
                        <div class="txt">
                            <p>{{cont1[1]}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

var CmpBannerMid = {
    template : `
        <div id="banner_mid">
            <div class="txt">
                <h2>Audition Schedule</h2>
                <p>실시간으로 업데이트 되는 오디션 정보를 확인 하실 수 있습니다. <br> 배우 또는 배우 지망생분들의 많은 참여 바랍니다.</p>
                <a href="#">오디션 정보 확인</a>
            </div>
        </div>
    `
}

var CmpCont2 = {
    data : () => {
        return {
            profile : [
                ["popup_1.png", "전여빈"],
                ["popup_2.png", "김새벽"],
                ["popup_3.png", "이상희"],
                ["popup_4.png", "김예은"],
                ["popup_5.png", "이학주"],
                ["popup_6.png", "박정민"],
            ]
        }
    },
    template : `
        <div id="cont02">
            <div class="wrap">
                <h2>Actors</h2>
                <div class="content">
                    <div class="box" v-for="cont2 in profile">
                        <div class="img" v-bind:style="{backgroundImage: 'url(./img/' + cont2[0] + ')'}">
                            <div class="txt">
                                <p>{{cont2[1]}}</p>
                                <a href="#">필모그래프</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" class="more">더보기</a>
            </div>
        </div>
    `
}

var Cmpreview = {
    template : `
        <div id="review">
            <div class="bg"></div>
            <div class="txt">
                <h3>Audition Reviews</h3>
                <p>1차 오디션 합격 후, 감독님과의 직접 오디션을 보는 소중한 기회를 얻게 되었습니다. 감독님께서 제시하신 키워드에 맞게 준비한 연기를 보여드렸습니다. 연기가 끝나고 감독님께서는 호흡, 발음, 발성, 집중력 등 다각도에서 꼼꼼한 평을 해주셨습니다. 연기뿐만 아니라 프로필 사진에 대해서도 조언을 해주셨고, 제가 미처 생각하지 못했던 부분을 짚어주셔서 큰 도움을 받게 되었습니다.</p>
                <img src="./img/rev_peo.png" alt="">
                <p class="name">김주영</p>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    `
}

var Cmpfooter = {
    data : () => {
        return {
            footer_arr : ["이용약관", "개인정보 취급방침" , "고객 상담실"]
        }
    },
    template : ` 
        <div id="footer"> 
            <div class="wrap">
                <div class="upper">
                    <ul>
                        <li v-for="i of footer_arr"><a href="#">{{i}}</a></li>
                    </ul>
                </div>
                <div class="downer">
                    <div class="left">
                        <p>Filmmakers | 대표 : 임지애 | 사업자등록번호 : 113-28-507</p>
                        <p>주소 : 서울특별시 강남구 논현로 | 개인정보관리책임자 : 한상용</p>
                        <p>&copy; 1999 - 2021 Filmmakers</p>
                    </div>
                    <div class="right">
                        <p>고객센터(이용 및 결제 문의) 제휴 및 대외 협력, 광고 문의</p>
                        <p>대표전화 : 02-1234-5678 | 카카오톡 플러스친구 : 필름메이커스</p>
                        <p>이메일 : info@filmmakers.com</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

new Vue({
    el: "#app",
    components: {
        "header-el" : CmpHeader,
        "bannertop-el" : CmpBannerTop,
        "cont1-el" : CmpCont1,
        "bannermid-el" : CmpBannerMid,
        "cont2-el" : CmpCont2,
        "review-el" : Cmpreview,
        "footer-el" : Cmpfooter
    }
});






