<script setup>
import { ref } from 'vue';

const items = ref([
  {
    link: '/MY_03',
    icon: 'my-contract',
    text: '나의계약',
    select: ''
  },
  {
    link: '/MY_Target',
    icon: 'my-target',
    text: '나의타겟',
    select: 'selected'
  },  
  {
    link: '/MY_04',
    icon: 'my-wishlist',
    text: '관심상품',
    select: ''
  },
  {
    link: '/MY_08',
    icon: 'my-qa',
    text: '나의문의',
    select: ''
  },
  {
    link: '/MY_06',
    icon: 'my-alarm',
    text: '알림',
    select: ''
  }
]);

const search = ref('');
const onClear = () => {
    search.value = ''
};
function onClick() {};
</script>

<template>
  <div class="sub-group my-page">
    <div class="sub-title-area">
      <h4 class="sub-title">My</h4>
    </div>
    <!-- CASE) 법인사업자 -->
    <div class="my-case-info">
      <div class="case-member">
        <p class="member-title"><span>김신한</span>님 안녕하세요!</p>
        <dl class="member-buisness">
          <dt>법인사업자</dt>
          <dd>(주)신한카드 </dd>
          <dd class="no-bar"><v-btn :ripple="false" variant="flat" color="Tertiary" size="x-small" rounded="md" >사업자계정전환</v-btn>      </dd>
        </dl>
      </div>
    
      <div class="case-btn">
        <v-btn variant="text">
          <v-icon class="btn-mycredit" />
        </v-btn>
        <v-btn variant="text">
          정보변경<v-icon class="btn-arrow" />
        </v-btn>
      </div>
    </div>
    <div class="submenu-list">
      <v-row>
        <v-col cols="12" md="3" v-for="(item, i) in items" :key="i">
          <v-list
            density="compact"
            :class="item.select"
          >
            <v-list-item
              :value="item"
              :to="item.link"
              link
            >
              <template v-slot:append>
                <v-avatar>
                  <v-icon :icon="item.icon" />
                </v-avatar>
              </template>
              <v-list-item-title v-text="item.text" />
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </div>
    <div class="static-content">
      <div class="target-marketing-wrap">
        <div class="info-box">
          <i class="ico-info"></i>
          <div class="info-desc">
            <div class="info">
              <span class="num">12356D7745</span>
              <span class="date">2024.07.18 15:33</span>
            </div>
            <div class="title">(광고)[신한카드] 신동아골프 특별회원 모집</div>
          </div>
          <div class="status">
            <span>접수</span>
          </div>
        </div>
        <div class="info-box">
          <i class="ico-info"></i>
          <div class="info-desc">
            <div class="info">
              <span class="date">2024.07.18 15:33</span>
            </div>
            <div class="title">임시로 저장된 신청 건입니다.</div>
          </div>
          <div class="status">
            <span>임시저장</span>
          </div>
        </div>
        <!-- 마케팅 주제 및 제공방식 -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">마케팅 주제 및 제공방식</div>
          </div>
          <div class="data-table">
            <dl>
              <dt style="width:18rem;">주제</dt>
              <dd class="auto"><div class="dd">기타 (신규 위스키 홍보)</div></dd>
              <dt style="width:18rem;">발송매체</dt>
              <dd class="auto"><div class="dd">MMS</div></dd>
            </dl>
            <dl>
              <dt style="width:18rem;">발송희망일시</dt>
              <dd class="auto">
                <div class="dd">
                  2024.07.23  13:00
                  <br>오전 중에 보내주세요. 7/23 안되면 그 주 아무 날이나 보내주심 됩니다.
                </div>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">발송희망 고객수</dt>
              <dd class="auto"><div class="dd">20만건</div></dd>
              <dt style="width:18rem;">행사/이벤트 URL</dt>
              <dd class="auto">
                <div class="dd">
                  <!-- <router-link to="/" class="btn-link" target="_blank">http://shinhancard.com/event http://shinhancard.com/eventhttp://shinhancard.com/eventhttp://shinhancard.com/eventhttp://shinhancard.com/eventhttp://shinhancard.com/event</router-link> -->
                  <v-btn variant="flat" class="btn-link" :href="`https://www.shinhancard.com/`" target="_blank">
                    <span>http://shinhancard.com/event http://shinhancard.com/eventhttp://shinhancard.com/eventhttp://shinhancard.com/eventhttp://shinhancard.com/eventhttp://shinhancard.com/event</span>
                  </v-btn>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        
        <!-- 타겟 대상군 -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">타겟 대상군</div>
          </div>
          <div class="data-table">
            <dl>
              <dt style="width:18rem;">성별</dt>
              <dd class="auto"><div class="dd">여성</div></dd>
              <dt style="width:18rem;">연령대</dt>
              <dd class="auto"><div class="dd">30대 이상 전체</div></dd>
            </dl>
            <dl>
              <dt style="width:18rem;">거주지</dt>
              <dd class="auto"><div class="dd">서울, 인천, 경기도면 됩니다.</div></dd>
              <dt style="width:18rem;">직군/직업</dt>
              <dd class="auto"><div class="dd">무관해요</div></dd>
            </dl>
            <dl>
              <dt style="width:18rem;">타겟</dt>
              <dd class="auto">
                <div class="dd">수도권 50대 여성이 2024년도에 의류업종 결제이력 가진 분들에게 발송 요청 합니다.</div>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">디타겟</dt>
              <dd class="auto">
                <div class="dd">무관합니다</div>
              </dd>
            </dl>
          </div>
        </div>
        
        <!-- 신청자 정보 -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">신청자 정보</div>
          </div>
          <div class="data-table">
            <dl>
              <dt style="width:18rem;">사업자명</dt>
              <dd class="auto"><div class="dd">신한글로벌</div></dd>
              <dt style="width:18rem;">담당자명</dt>
              <dd class="auto"><div class="dd">홍길동</div></dd>
            </dl>
            <dl>
              <dt style="width:18rem;">사업자등록번호</dt>
              <dd class="auto">
                <div class="dd">123456789</div>
              </dd>
            </dl>
          </div>
        </div>
        
        <!-- 광고주 정보 -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">광고주 정보</div>
          </div>
          <div class="data-table">
            <dl>
              <dt style="width:18rem;">사업자명</dt>
              <dd class="auto"><div class="dd"></div></dd>
              <dt style="width:18rem;">담당자명</dt>
              <dd class="auto"><div class="dd"></div></dd>
            </dl>
            <dl>
              <dt style="width:18rem;">사업자등록번호</dt>
              <dd class="auto">
                <div class="dd"></div>
              </dd>
            </dl>
          </div>
        </div>
        <!-- 광고메시지 -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">광고메시지</div>
          </div>
          <!-- MMS -->
          <div class="data-table">
            <dl>
              <dt style="width:18rem;">제목</dt>
              <dd class="auto"><div class="dd">MMS (광고)[신한카드, 신동아골프 특별회원 모집 안내]</div></dd>
            </dl>
            <dl>
              <dt style="width:18rem;">내용</dt>
              <dd class="auto">
                <div class="dd">
                  (광고)[신한카드]
                  <br><신동아골프>에서 창립 20주년 기념 무기명 특별 회원 모집을 안내드립니다.
                  <br>
                  <br>■ 40여 개의 수도권 골프장과 정식 제휴로 비용, 부킹 걱정 끝!
                  <br>
                  <br>■ 혜택 자세히 보기
                  <br>http://bit.ly/sdagolf
                  <br>
                  <br>※ 준법감시 심의필 제20240307-Cpc003호(2024.03.07~2025.03.06)
                  <br>※ 수신거부080-800-8114(무료)
                </div>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">이미지</dt>
              <dd class="auto">
                <div class="dd">
                  <div role="button" class="text-download text-16">
                      <v-icon class="icon-download" /><span class="txt">MMS 파일명.img</span>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">변동 가능 문구 #1</dt>
              <dd>
                <dl>
                  <dt style="width:12rem;">작성 문구</dt>
                  <dd class="auto"><div class="dd">신동아골프 특별회원 모집</div></dd>
                </dl>
                <dl>
                  <dt style="width:12rem;">변경 문구</dt>
                  <dd class="auto"><div class="dd">골프명가 신동아골프 스페셜회원 모집</div></dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">변동 가능 문구 #2</dt>
              <dd>
                <dl>
                  <dt style="width:12rem;">작성 문구</dt>
                  <dd class="auto"><div class="dd">신동아골프 특별회원 모집</div></dd>
                </dl>
                <dl>
                  <dt style="width:12rem;">변경 문구</dt>
                  <dd class="auto"><div class="dd">골프명가 신동아골프 스페셜회원 모집</div></dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">전달사항</dt>
              <dd class="auto"><div class="dd"></div></dd>
            </dl>
          </div>
          <!-- APP PUSH -->
          <div class="data-table">
            <dl>
              <dt style="width:18rem;">제목</dt>
              <dd class="auto"><div class="dd">APP PUSH 신동아골프 특별회원 모집</div></dd>
            </dl>
            <dl>
              <dt style="width:18rem;">알림메시지</dt>
              <dd class="auto">
                <div class="dd"><신동아골프>에서 창립 20주년 기념 무기명 특별 회원 모집을 안내드립니다.</div>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">PUSH 내용</dt>
              <dd class="auto">
                <div class="dd">
                  <div role="button" class="text-download text-16">
                      <v-icon class="icon-download" /><span class="txt">파일명.pdf</span>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">랜딩 URL</dt>
              <dd class="auto">
                <div class="dd"></div>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">변동 가능 문구 #1</dt>
              <dd>
                <dl>
                  <dt style="width:12rem;">작성 문구</dt>
                  <dd class="auto"><div class="dd">신동아골프 특별회원 모집</div></dd>
                </dl>
                <dl>
                  <dt style="width:12rem;">변경 문구</dt>
                  <dd class="auto"><div class="dd">골프명가 신동아골프 스페셜회원 모집</div></dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">전달사항</dt>
              <dd class="auto"><div class="dd"></div></dd>
            </dl>
          </div>
          <!-- RCS -->
          <div class="data-table">
            <dl>
              <dt style="width:18rem;">제목</dt>
              <dd class="auto"><div class="dd">RCS (광고)[신한카드, 신동아골프 특별회원 모집 안내]</div></dd>
            </dl>
            <dl>
              <dt style="width:18rem;">내용</dt>
              <dd class="auto">
                <div class="dd">
                  (광고)[신한카드]
                  <br><신동아골프>에서 창립 20주년 기념 무기명 특별 회원 모집을 안내드립니다.
                  <br>
                  <br>■ 40여 개의 수도권 골프장과 정식 제휴로 비용, 부킹 걱정 끝!
                  <br>
                  <br>■ 혜택 자세히 보기
                  <br>http://bit.ly/sdagolf
                  <br>
                  <br>※ 준법감시 심의필 제20240307-Cpc003호(2024.03.07~2025.03.06)
                  <br>※ 수신거부080-800-8114(무료)
                </div>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">RCS 하단 버튼 #1</dt>
              <dd>
                <dl>
                  <dt style="width:12rem;">액션</dt>
                  <dd class="auto"><div class="dd">전화걸기</div></dd>
                </dl>
                <dl>
                  <dt style="width:12rem;">버튼명</dt>
                  <dd class="auto"><div class="dd">바로 주문하기</div></dd>
                </dl>
                <dl>
                  <dt style="width:12rem;">내용</dt>
                  <dd class="auto"><div class="dd">080-0000-0000</div></dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">RCS 하단 버튼 #2</dt>
              <dd>
                <dl>
                  <dt style="width:12rem;">액션</dt>
                  <dd class="auto"><div class="dd">전화걸기</div></dd>
                </dl>
                <dl>
                  <dt style="width:12rem;">버튼명</dt>
                  <dd class="auto"><div class="dd">바로 주문하기</div></dd>
                </dl>
                <dl>
                  <dt style="width:12rem;">내용</dt>
                  <dd class="auto"><div class="dd">080-0000-0000</div></dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">변동 가능 문구 #2</dt>
              <dd>
                <dl>
                  <dt style="width:12rem;">작성 문구</dt>
                  <dd class="auto"><div class="dd">신동아골프 특별회원 모집</div></dd>
                </dl>
                <dl>
                  <dt style="width:12rem;">변경 문구</dt>
                  <dd class="auto"><div class="dd">골프명가 신동아골프 스페셜회원 모집</div></dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt style="width:18rem;">전달사항</dt>
              <dd class="auto"><div class="dd"></div></dd>
            </dl>
          </div>
        </div>
        <p class="text-ps">
          ※ 신청 내용 수정 및 진행 중지는 각 담당자에게 별도 연락 주시길 바랍니다.
          <br>아직 담당자가 배정되지 않은 사업자께서는 고객문의를 통해 요청사항을 남겨주시길 바랍니다.
        </p>
        <div class="btn-list btm-st">
            <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="secondary">진행 중지</v-btn>
            <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="primary">수정 후 신청</v-btn>
        </div>
        <div class="btn-list btm-st">
            <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="primary">목록</v-btn>
        </div>
      </div>
    </div>
    
  </div>
</template>