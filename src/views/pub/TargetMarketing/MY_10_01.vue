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

    <div class="target-marketing-wrap">
      <div class="total-area">
        <div class="total">총&nbsp; <span>10건</span></div>
        <div class="right">
          <div class="inp inp-search">
              <v-text-field
                  v-model="search"
                  hide-details clearable
                  variant="outlined"
                  color="primary"
                  append-inner-icon="btn-search-blue"
                  placeholder="제목 검색"
                  @click:append-inner="onClick"
                  @click:clear="onClear()"
              />
          </div>
        </div>
      </div>
      <div class="customer-list target-customer-list">
          <v-list>
              <v-list-item
                  v-for="item, i in 10" :key="i"
                  link
                  to="/"
              >
                  <div class="item-content">
                      <div class="category text-16"><span class="status">접수</span><span class="date text-14">2024.07.18 15:33</span></div>
                      <div class="title text-16">
                          <div class="text-truncate"><span class="num">C240405001</span> (광고)[신한카드, 신동아골프 특별회원 모집 안내]</div>
                      </div>
                      <div class="text-row text-14">
                          <div class="label">발송매체</div>
                          <div class="date">2024.05.05</div>
                          <v-divider vertical />
                          <div class="label">발송희망일</div>
                          <div class="date">2024.05.05</div>
                      </div>
                  </div>
                  <template v-if="i%2 == 0" v-slot:append>
                    <div class="btn-gap-wrap">
                      <v-btn :ripple="false" variant="flat" color="primary" size="small" rounded="md" >재신청</v-btn>
                      <v-btn :ripple="false" variant="flat" color="orange" size="small" rounded="md" >결과리포트</v-btn>
                    </div>
                  </template>
                  <template v-else v-slot:append>
                    <div class="btn-gap-wrap">
                      <v-btn :ripple="false" variant="outlined" color="primary" size="small" rounded="md" >수정하기</v-btn>
                      <v-btn :ripple="false" variant="outlined" color="primary" size="small" rounded="md" >광고메시지 수정</v-btn>
                    </div>
                  </template>
              </v-list-item>
          </v-list>
      </div>
      <div class="services-more-area">
          <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
      </div>
      
    </div>
  </div>
</template>