// 오늘의 아이디어 - 매일 하나씩 일상의 사소한 어려움을 해결하는 아이디어 제공

// 아이디어 데이터 (카테고리별 12개, 총 60개: 시간/정신/육체/금융/기타)
const IDEAS = [
  // ── 시간 ──────────────────────────────────────
  {
    id: 1,
    category: "시간",
    title: "여러 앱에 흩어진 할 일 목록",
    problem: "메모앱, 카톡, 종이에 나눠 적어 놓쳐버린다",
    cause: "기록 도구가 통일되어 있지 않아 어디에 뭘 적었는지 헷갈리기 때문",
    options: [
      { solution: "할 일 전용 앱 1개만 쓰기로 정하기", effort: "낮음", cost: "무료" },
      { solution: "종이 다이어리로 통일하기", effort: "낮음", cost: "5천원 내외" },
    ],
    steps: [
      "현재 흩어진 할 일을 한 곳에 모두 옮기기",
      "앞으로는 이 도구에만 기록하기로 규칙 정하기",
      "매일 아침 5분씩 확인하는 루틴 만들기",
    ],
  },
  {
    id: 2,
    category: "시간",
    title: "아침마다 뭘 입을지 고민하는 시간",
    problem: "매일 아침 옷 고르는 데 10분 이상 걸린다",
    cause: "전날 미리 정해두지 않고 당일 아침에 판단하기 때문",
    options: [
      { solution: "전날 밤 다음날 옷 미리 꺼내두기", effort: "낮음", cost: "무료" },
      { solution: "요일별 옷 조합을 미리 정해두기(캡슐 옷장)", effort: "중간", cost: "무료" },
    ],
    steps: [
      "일주일치 옷 조합을 한번에 정하기",
      "전날 밤 다음날 옷을 옷걸이에 걸어두기",
      "1주일간 그대로 실행하며 조정하기",
    ],
  },
  {
    id: 3,
    category: "시간",
    title: "이메일 답장을 미루다 쌓임",
    problem: "받은 이메일을 미뤄두다 답장할 게 계속 쌓인다",
    cause: "받은 즉시 처리 기준이 없어 나중으로 미루기 때문",
    options: [
      { solution: "2분 안에 답할 수 있으면 즉시 처리", effort: "낮음", cost: "무료" },
      { solution: "하루 2번(오전/오후) 이메일 처리 시간 고정", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "미처리 이메일을 전부 확인해 목록화",
      "2분 규칙 또는 고정 시간 중 하나 선택",
      "일주일간 적용해보고 남은 이메일 수 확인",
    ],
  },
  {
    id: 4,
    category: "시간",
    title: "회의 시간이 항상 늘어짐",
    problem: "회의가 예정 시간보다 항상 길어진다",
    cause: "종료 시간과 안건이 명확히 정해지지 않기 때문",
    options: [
      { solution: "회의 시작 전 안건과 종료 시간 공지", effort: "낮음", cost: "무료" },
      { solution: "타이머로 안건별 시간 배분하기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "다음 회의부터 안건 3개 이내로 제한",
      "회의 초대장에 종료 시각 명시",
      "회의 마지막 5분은 결정사항 정리로 고정",
    ],
  },
  {
    id: 5,
    category: "시간",
    title: "출퇴근길 자투리 시간 낭비",
    problem: "이동시간을 그냥 흘려보내는 경우가 많다",
    cause: "이동시간에 할 일을 미리 정해두지 않기 때문",
    options: [
      { solution: "오디오북/팟캐스트 재생목록 미리 준비", effort: "낮음", cost: "무료~월 1만원대" },
      { solution: "이동시간 전용 짧은 할 일 리스트 만들기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "이동시간에 할 수 있는 일 3가지 정하기",
      "전날 밤 콘텐츠/할 일 미리 준비",
      "일주일 실행 후 만족도 체크",
    ],
  },
  {
    id: 6,
    category: "시간",
    title: "반복되는 일정을 매번 새로 입력",
    problem: "매달 같은 일정을 매번 새로 등록하고 있다",
    cause: "캘린더의 반복 설정 기능을 활용하지 않기 때문",
    options: [
      { solution: "캘린더 앱 반복 일정 기능 설정", effort: "낮음", cost: "무료" },
      { solution: "월간 고정 일정 템플릿 만들어두기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "매달 반복되는 일정 목록 뽑기",
      "캘린더에 반복 주기로 한번에 등록",
      "분기마다 목록 재검토",
    ],
  },
  {
    id: 7,
    category: "시간",
    title: "마감 직전에 몰아서 하는 습관",
    problem: "일을 마감 직전에 몰아서 처리하게 된다",
    cause: "큰 작업을 잘게 나누지 않아 시작이 부담스럽기 때문",
    options: [
      { solution: "작업을 하루 단위 소단위로 쪼개기", effort: "중간", cost: "무료" },
      { solution: "마감일보다 이틀 이른 개인 마감일 설정", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "전체 작업을 3~5단계로 분해",
      "각 단계에 개인 마감일 부여",
      "달력에 단계별 마감일 등록",
    ],
  },
  {
    id: 8,
    category: "시간",
    title: "하루 계획을 세워도 안 지켜짐",
    problem: "계획한 일들이 매번 다 지켜지지 않는다",
    cause: "계획한 일의 개수가 실제 가용 시간보다 많기 때문",
    options: [
      { solution: "하루 목표를 3개 이하로 제한", effort: "낮음", cost: "무료" },
      { solution: "각 일에 예상 소요시간 미리 적기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "내일 할 일 후보를 모두 나열",
      "가장 중요한 3개만 남기고 나머지 미루기",
      "저녁에 실행 결과 확인 후 다음날 조정",
    ],
  },
  {
    id: 9,
    category: "시간",
    title: "SNS 확인하다 시간 순삭",
    problem: "잠깐 확인한다는 게 시간이 훌쩍 지나가 있다",
    cause: "앱 사용에 시간 제한이나 알림 트리거가 없기 때문",
    options: [
      { solution: "앱별 스크린타임 제한 설정", effort: "낮음", cost: "무료" },
      { solution: "홈 화면에서 앱 아이콘 숨기기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "가장 많이 쓰는 앱 스크린타임 확인",
      "해당 앱에 하루 사용 제한 설정",
      "일주일 후 총 사용시간 변화 확인",
    ],
  },
  {
    id: 10,
    category: "시간",
    title: "정기 구독/약속 날짜를 자주 깜빡함",
    problem: "정기적인 약속이나 결제일을 자주 놓친다",
    cause: "결제일/약속일이 한 곳에 정리되어 있지 않기 때문",
    options: [
      { solution: "캘린더에 결제일 알림 등록", effort: "낮음", cost: "무료" },
      { solution: "구독 서비스 전용 관리 앱 사용", effort: "낮음", cost: "무료~유료" },
    ],
    steps: [
      "모든 구독/정기 약속 목록 작성",
      "각 항목에 3일 전 알림 설정",
      "분기마다 목록 재점검",
    ],
  },
  {
    id: 11,
    category: "시간",
    title: "집안일 순서가 뒤죽박죽이라 비효율",
    problem: "집안일을 할 때마다 순서가 뒤죽박죽이라 시간이 더 걸린다",
    cause: "동선과 순서를 고려하지 않고 그때그때 처리하기 때문",
    options: [
      { solution: "공간 동선 순서대로 집안일 순서 정하기", effort: "낮음", cost: "무료" },
      { solution: "요일별 담당 집안일 정해두기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "집안일 목록을 공간별로 분류",
      "동선에 맞춰 처리 순서 정하기",
      "일주일 적용 후 소요시간 비교",
    ],
  },
  {
    id: 12,
    category: "시간",
    title: "점심시간에 뭘 먹을지 매번 고민",
    problem: "매일 점심 메뉴 고르는 데 시간을 쓴다",
    cause: "선택지를 그때그때 떠올리려니 결정에 시간이 걸리기 때문",
    options: [
      { solution: "주간 점심 메뉴 로테이션 3~4개 정하기", effort: "낮음", cost: "무료" },
      { solution: "요일별 메뉴 고정(월=한식, 화=분식 등)", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "자주 먹는 메뉴 5개 리스트업",
      "요일별로 배정",
      "2주 실행 후 질리는 메뉴 교체",
    ],
  },

  // ── 정신 ──────────────────────────────────────
  {
    id: 13,
    category: "정신",
    title: "거절을 못 해서 쌓이는 부탁들",
    problem: "부탁을 거절하지 못해 할 일이 계속 쌓인다",
    cause: "거절 기준이 없어 매번 즉흥적으로 판단하기 때문",
    options: [
      { solution: "수락 전 '생각해보고 답할게요' 하루 유예 두기", effort: "낮음", cost: "무료" },
      { solution: "거절 기준 3가지를 미리 정해두기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "최근 후회했던 수락 사례 3개 떠올리기",
      "공통된 거절 기준 정리",
      "다음 부탁부터 기준 적용해보기",
    ],
  },
  {
    id: 14,
    category: "정신",
    title: "잠들기 전 걱정거리가 계속 떠오름",
    problem: "자려고 누우면 걱정거리가 계속 떠올라 잠들기 어렵다",
    cause: "생각을 밖으로 꺼내지 않고 머릿속에서만 되풀이하기 때문",
    options: [
      { solution: "자기 전 걱정 노트에 적어두기", effort: "낮음", cost: "무료" },
      { solution: "내일 할 일 목록을 미리 적어 안심시키기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "침대 옆에 메모장/앱 준비",
      "떠오르는 걱정과 할 일을 그대로 적기",
      "다음날 아침에만 다시 보기로 규칙 정하기",
    ],
  },
  {
    id: 15,
    category: "정신",
    title: "작은 실수에도 오래 자책함",
    problem: "작은 실수 하나에도 오랫동안 스스로를 자책한다",
    cause: "실수와 자신의 가치를 동일시하기 때문",
    options: [
      { solution: "실수 상황을 제3자 입장에서 다시 써보기", effort: "낮음", cost: "무료" },
      { solution: "실수-교훈-다음행동 3줄로 정리하는 습관", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "실수한 사실만 객관적으로 적기",
      "거기서 얻은 교훈 한 줄 적기",
      "다음에 할 행동 한 줄로 마무리",
    ],
  },
  {
    id: 16,
    category: "정신",
    title: "대화 중 할 말이 생각 안 남",
    problem: "대화 중에 갑자기 할 말이 떠오르지 않아 어색해진다",
    cause: "미리 화제를 준비하지 않고 즉흥에 의존하기 때문",
    options: [
      { solution: "만나기 전 최근 이슈/질문 3가지 미리 준비", effort: "낮음", cost: "무료" },
      { solution: "상대에게 질문을 먼저 던지는 연습", effort: "중간", cost: "무료" },
    ],
    steps: [
      "만남 전 최근 있었던 일 3가지 정리",
      "대화가 끊기면 쓸 질문 1개 준비",
      "대화 후 어떤 질문이 효과적이었는지 기록",
    ],
  },
  {
    id: 17,
    category: "정신",
    title: "갈등 상황을 회피하다 곪음",
    problem: "불편한 대화를 피하다 관계가 더 나빠진다",
    cause: "불편한 대화를 미루는 게 당장은 편하기 때문",
    options: [
      { solution: "할 말을 미리 글로 정리한 뒤 대화 시작", effort: "중간", cost: "무료" },
      { solution: "대화 시점을 마감일처럼 미리 정해두기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "전하고 싶은 핵심 한 문장 정리",
      "대화할 날짜와 장소 미리 정하기",
      "대화 후 결과와 감정 간단히 기록",
    ],
  },
  {
    id: 18,
    category: "정신",
    title: "완벽하게 하려다 시작을 못함",
    problem: "완벽하게 하려는 마음에 아예 시작을 못한다",
    cause: "완성 기준이 너무 높아 첫걸음의 부담이 크기 때문",
    options: [
      { solution: "완성도 60%짜리 초안부터 만들기 규칙", effort: "낮음", cost: "무료" },
      { solution: "작업 시간을 15분으로 제한해 일단 시작하기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "'완벽한 결과' 대신 '일단 끝낸 결과' 목표로 재설정",
      "15분 타이머로 초안 작성 시작",
      "완료 후 다듬는 단계로 분리",
    ],
  },
  {
    id: 19,
    category: "정신",
    title: "남과 비교하며 위축됨",
    problem: "다른 사람과 비교하다 스스로 위축된다",
    cause: "타인의 결과와 나의 과정을 같은 기준으로 비교하기 때문",
    options: [
      { solution: "비교 대신 지난달 나와 비교하는 기록 남기기", effort: "낮음", cost: "무료" },
      { solution: "비교를 유발하는 SNS 사용시간 줄이기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "위축되는 순간 어떤 비교였는지 적어보기",
      "한달 전 나와 비교할 지표 1개 정하기",
      "주 1회 그 지표로만 스스로 점검",
    ],
  },
  {
    id: 20,
    category: "정신",
    title: "감정을 표현하지 못하고 쌓아둠",
    problem: "감정을 표현하지 못하고 마음속에 계속 쌓아둔다",
    cause: "감정 표현을 약점으로 여기거나 표현 방법이 익숙하지 않기 때문",
    options: [
      { solution: "'나는 ~할 때 ~하게 느껴' 문장 틀 연습", effort: "중간", cost: "무료" },
      { solution: "감정 일기를 매일 3줄씩 쓰기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "오늘 느낀 감정 하나 골라 이름 붙이기",
      "'나는 ~할 때 ~하게 느껴' 문장으로 적어보기",
      "가까운 사람에게 짧게 표현해보기",
    ],
  },
  {
    id: 21,
    category: "정신",
    title: "우유부단해서 결정을 못 내림",
    problem: "선택지 앞에서 결정을 내리지 못하고 계속 미룬다",
    cause: "선택 기준이 없어 매번 모든 가능성을 다시 검토하기 때문",
    options: [
      { solution: "결정에 걸리는 시간을 미리 제한하기(5분 규칙)", effort: "낮음", cost: "무료" },
      { solution: "자신만의 우선순위 기준 3가지 정하기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "최근 오래 걸린 결정 사례 떠올리기",
      "공통적으로 중요했던 기준 3가지 정리",
      "다음 결정에 5분 제한과 기준 함께 적용",
    ],
  },
  {
    id: 22,
    category: "정신",
    title: "칭찬을 받아도 믿지 못함",
    problem: "칭찬을 들어도 진심으로 받아들이지 못한다",
    cause: "스스로에 대한 평가 기준이 타인보다 훨씬 엄격하기 때문",
    options: [
      { solution: "칭찬 받은 내용을 그대로 기록해두는 노트 만들기", effort: "낮음", cost: "무료" },
      { solution: "칭찬에 '감사합니다'로만 답하는 연습", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "최근 받은 칭찬 하나 떠올리기",
      "사실 관계만 담담히 기록",
      "다음 칭찬부터는 반박 없이 감사로만 응답",
    ],
  },
  {
    id: 23,
    category: "정신",
    title: "화가 나면 바로 표출해서 후회함",
    problem: "화가 나면 바로 표출해버려서 나중에 후회한다",
    cause: "감정과 반응 사이에 완충 시간이 없기 때문",
    options: [
      { solution: "화가 날 때 10초 세고 반응하는 규칙", effort: "낮음", cost: "무료" },
      { solution: "그 자리를 잠시 벗어나는 '타임아웃' 정하기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "화가 올라오는 신체 신호 미리 파악해두기",
      "신호가 오면 10초 세거나 자리 이동",
      "진정된 후에 하고 싶은 말 다시 정리",
    ],
  },
  {
    id: 24,
    category: "정신",
    title: "혼자 있는 시간이 불안하게 느껴짐",
    problem: "혼자 있는 시간이 편하지 않고 불안하게 느껴진다",
    cause: "혼자 있는 시간에 할 일을 정해두지 않아 생각이 불안으로 흘러가기 때문",
    options: [
      { solution: "혼자만의 시간에 할 활동 리스트 미리 만들기", effort: "낮음", cost: "무료" },
      { solution: "짧은 산책이나 스트레칭으로 전환하기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "혼자일 때 즐거웠던 활동 3가지 떠올리기",
      "눈에 띄는 곳에 리스트 붙여두기",
      "불안이 올라올 때 리스트 중 하나 바로 실행",
    ],
  },

  // ── 육체 ──────────────────────────────────────
  {
    id: 25,
    category: "육체",
    title: "물을 하루 종일 거의 안 마심",
    problem: "하루 종일 물을 거의 마시지 않고 지낸다",
    cause: "눈에 보이지 않으면 필요성을 잊기 때문",
    options: [
      { solution: "책상 위에 물병 항상 채워 두기", effort: "낮음", cost: "무료" },
      { solution: "시간대별 물 마시기 알림 설정", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "1L 물병 준비해 자리에 비치",
      "2~3시간 간격 알림 설정",
      "하루 마신 양 눈금으로 체크",
    ],
  },
  {
    id: 26,
    category: "육체",
    title: "앉아있는 시간이 너무 길어 뻐근함",
    problem: "장시간 앉아 있어 몸이 뻐근하고 무겁다",
    cause: "장시간 앉아 있어도 몸이 신호를 늦게 보내기 때문",
    options: [
      { solution: "50분마다 5분 스트레칭 알림 설정", effort: "낮음", cost: "무료" },
      { solution: "스탠딩 데스크나 높이 조절 책상 활용", effort: "중간", cost: "10만원대~" },
    ],
    steps: [
      "타이머 앱으로 50분 알림 설정",
      "알림이 울리면 자리에서 일어나 스트레칭",
      "일주일 후 뻐근함 정도 비교",
    ],
  },
  {
    id: 27,
    category: "육체",
    title: "야식을 끊기 어려움",
    problem: "밤마다 야식을 참기 어렵다",
    cause: "저녁 이후 허기와 습관적 심심함이 겹치기 때문",
    options: [
      { solution: "저녁 식사량을 늘려 포만감 유지", effort: "낮음", cost: "무료" },
      { solution: "야식 대신 할 일(양치, 산책) 트리거 만들기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "야식이 당기는 시간대 파악",
      "그 시간에 할 대체 행동 1개 정하기",
      "일주일간 대체 행동으로 전환 시도",
    ],
  },
  {
    id: 28,
    category: "육체",
    title: "아침을 자주 거름",
    problem: "시간에 쫓겨 아침을 자주 거른다",
    cause: "아침 준비 시간이 부족하고 간단한 대안이 없기 때문",
    options: [
      { solution: "전날 밤 간단한 아침거리 미리 준비", effort: "낮음", cost: "5천원 내외" },
      { solution: "바나나, 견과류 등 즉석 섭취 가능한 음식 상비", effort: "낮음", cost: "5천원 내외" },
    ],
    steps: [
      "전날 밤 5분 투자해 아침거리 준비",
      "현관/책상에 즉석 섭취 음식 상비",
      "일주일간 아침 섭취 여부 체크",
    ],
  },
  {
    id: 29,
    category: "육체",
    title: "운동을 시작해도 3일 못 감",
    problem: "운동을 시작해도 3일을 못 넘기고 그만둔다",
    cause: "목표가 너무 크고 시작 장벽이 높기 때문",
    options: [
      { solution: "하루 5분 홈트레이닝부터 시작", effort: "낮음", cost: "무료" },
      { solution: "운동 약속을 타인과 함께 만들기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "'하루 5분'처럼 아주 작은 목표 정하기",
      "운동 시간을 고정 일정으로 등록",
      "2주간 실행 후 시간을 조금씩 늘리기",
    ],
  },
  {
    id: 30,
    category: "육체",
    title: "수면의 질이 낮아 항상 피곤함",
    problem: "잠은 자는데도 항상 피곤함이 가시지 않는다",
    cause: "취침 시간이 불규칙하고 자기 전 화면 노출이 많기 때문",
    options: [
      { solution: "취침 1시간 전 화면 사용 중단", effort: "중간", cost: "무료" },
      { solution: "매일 같은 시각에 알람 맞춰 기상", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "현재 평균 취침/기상 시각 기록",
      "취침 1시간 전 알림 설정 후 화면 끄기",
      "일주일 후 피로도 변화 체크",
    ],
  },
  {
    id: 31,
    category: "육체",
    title: "목/어깨 결림이 만성화됨",
    problem: "목과 어깨 결림이 만성적으로 이어진다",
    cause: "모니터·휴대폰을 볼 때 자세가 앞으로 굽기 때문",
    options: [
      { solution: "모니터 높이를 눈높이로 조정", effort: "낮음", cost: "무료~1만원대" },
      { solution: "1시간마다 목/어깨 스트레칭 루틴 실행", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "현재 모니터/의자 높이 점검",
      "눈높이에 맞게 받침대 등으로 조정",
      "1시간 알림에 맞춰 스트레칭 실행",
    ],
  },
  {
    id: 32,
    category: "육체",
    title: "야근 후 스트레칭 없이 바로 취침",
    problem: "야근한 날은 스트레칭 없이 바로 잠든다",
    cause: "피곤해서 마무리 루틴을 생략하게 되기 때문",
    options: [
      { solution: "5분 스트레칭을 취침 전 고정 루틴으로 지정", effort: "낮음", cost: "무료" },
      { solution: "따뜻한 샤워로 긴장 풀고 자기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "잠자리 옆에 스트레칭 순서 메모 붙이기",
      "야근한 날에도 5분만 실행하기로 정하기",
      "한 달 후 아침 컨디션 비교",
    ],
  },
  {
    id: 33,
    category: "육체",
    title: "눈이 뻑뻑하고 피로함(화면 과다)",
    problem: "화면을 오래 봐서 눈이 뻑뻑하고 피로하다",
    cause: "장시간 화면을 보면서 눈 깜빡임이 줄어들기 때문",
    options: [
      { solution: "20-20-20 규칙(20분마다 20초, 6m 밖 보기)", effort: "낮음", cost: "무료" },
      { solution: "인공눈물이나 가습기로 눈 건조 완화", effort: "낮음", cost: "5천원 내외" },
    ],
    steps: [
      "20분 알림 설정",
      "알림 울리면 먼 곳 20초 바라보기",
      "건조함이 심하면 인공눈물 상비",
    ],
  },
  {
    id: 34,
    category: "육체",
    title: "규칙적인 식사 시간을 못 지킴",
    problem: "업무에 밀려 식사 시간이 매번 들쭉날쭉하다",
    cause: "업무 흐름에 맞춰 식사를 뒤로 미루는 습관 때문",
    options: [
      { solution: "식사 시간을 캘린더에 회의처럼 고정 등록", effort: "낮음", cost: "무료" },
      { solution: "식사 알림을 정해진 시각에 설정", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "하루 세 끼 목표 시각 정하기",
      "캘린더/알림에 등록",
      "일주일간 실제 식사 시각과 비교",
    ],
  },
  {
    id: 35,
    category: "육체",
    title: "계단 대신 항상 엘리베이터만 이용",
    problem: "가까운 층인데도 항상 엘리베이터를 탄다",
    cause: "습관적으로 더 편한 선택을 자동으로 하기 때문",
    options: [
      { solution: "3층 이하는 계단 이용 규칙 정하기", effort: "낮음", cost: "무료" },
      { solution: "엘리베이터 대신 계단 위치를 눈에 띄게 확인해두기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "본인 기준 계단 이용 층수 규칙 정하기",
      "일주일간 규칙 지켜보기",
      "숨참/피로도 변화 체감해보기",
    ],
  },
  {
    id: 36,
    category: "육체",
    title: "주말에 몰아 자서 리듬이 깨짐",
    problem: "주말에 몰아 자고 나면 생활 리듬이 깨진다",
    cause: "평일 수면 부족을 주말 몰아자기로 보상하려 하기 때문",
    options: [
      { solution: "주말 기상 시각을 평일과 1~2시간 이내로 유지", effort: "중간", cost: "무료" },
      { solution: "평일 수면 시간을 30분씩 늘려보기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "평일 평균 수면 시간 확인",
      "부족한 만큼 평일 취침 시각 당기기",
      "주말 기상 시각 차이를 2시간 이내로 제한",
    ],
  },

  // ── 금융 ──────────────────────────────────────
  {
    id: 37,
    category: "금융",
    title: "안 쓰는 구독 서비스 자동결제",
    problem: "안 쓰는 구독 서비스를 매달 결제만 하고 있다",
    cause: "결제일을 인지 못 해 방치하기 때문",
    options: [
      { solution: "카드사 앱에서 정기결제 내역 한번에 점검", effort: "낮음", cost: "무료" },
      { solution: "구독 관리 전용 앱으로 결제일 알림 받기", effort: "낮음", cost: "무료~유료" },
    ],
    steps: [
      "최근 3개월 카드 명세서에서 정기결제 항목 확인",
      "안 쓰는 항목 즉시 해지",
      "분기마다 재점검 일정 등록",
    ],
  },
  {
    id: 38,
    category: "금융",
    title: "카드값이 매달 예상보다 많이 나옴",
    problem: "카드값이 예상보다 매달 더 많이 나온다",
    cause: "지출 시점과 결제 시점의 시차 때문에 체감이 안 되기 때문",
    options: [
      { solution: "카드사 실시간 결제 알림 켜기", effort: "낮음", cost: "무료" },
      { solution: "주간 단위로 누적 지출 확인 습관 만들기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "카드 앱에서 결제 알림 기능 켜기",
      "매주 일요일 저녁 누적 지출 확인",
      "다음 주 예산과 비교해 조정",
    ],
  },
  {
    id: 39,
    category: "금융",
    title: "충동구매 후 후회하는 일이 잦음",
    problem: "충동적으로 구매하고 나서 자주 후회한다",
    cause: "구매 결정까지 걸리는 시간이 거의 없기 때문",
    options: [
      { solution: "장바구니에 담고 24시간 후 재검토", effort: "낮음", cost: "무료" },
      { solution: "구매 전 '한 달 뒤에도 필요할까' 자문하기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "사고 싶은 물건은 즉시 결제하지 않고 장바구니에 담기",
      "24시간 타이머 설정",
      "시간이 지난 후에도 필요하면 그때 구매",
    ],
  },
  {
    id: 40,
    category: "금융",
    title: "가계부를 써도 3일 만에 그만둠",
    problem: "가계부를 시작해도 며칠 못 가 그만둔다",
    cause: "기록 방식이 번거로워 지속하기 어렵기 때문",
    options: [
      { solution: "카드 자동연동 가계부 앱 사용", effort: "낮음", cost: "무료" },
      { solution: "항목을 5개 이내 카테고리로 단순화", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "자동연동되는 가계부 앱 설치",
      "카테고리를 5개 이내로 단순화",
      "일주일간 매일 1분만 확인하는 루틴 만들기",
    ],
  },
  {
    id: 41,
    category: "금융",
    title: "비상금이 따로 없어 급전에 취약함",
    problem: "갑자기 목돈이 필요하면 대응할 여유가 없다",
    cause: "비상 상황을 대비한 별도 계좌/자금이 없기 때문",
    options: [
      { solution: "월급의 5~10%를 비상금 전용 계좌로 자동이체", effort: "낮음", cost: "무료" },
      { solution: "목표 금액(생활비 3개월치)을 정해 단계적으로 모으기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "비상금 전용 통장 개설",
      "월급일 다음날 자동이체 설정",
      "3~6개월 후 목표 달성 여부 점검",
    ],
  },
  {
    id: 42,
    category: "금융",
    title: "여러 계좌에 돈이 흩어져 파악이 안 됨",
    problem: "돈이 여러 계좌에 흩어져 있어 전체 규모를 모른다",
    cause: "계좌를 하나씩 확인해야 해서 전체 자산 파악이 번거롭기 때문",
    options: [
      { solution: "계좌통합조회 앱으로 한눈에 확인", effort: "낮음", cost: "무료" },
      { solution: "불필요한 계좌는 정리해서 개수 줄이기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "보유 중인 모든 계좌 목록화",
      "자산통합조회 앱에 연동",
      "3개월 이상 안 쓰는 계좌는 해지 검토",
    ],
  },
  {
    id: 43,
    category: "금융",
    title: "포인트/쿠폰을 항상 까먹고 놓침",
    problem: "적립한 포인트나 쿠폰을 쓸 때마다 까먹는다",
    cause: "적립/사용 정보가 여러 앱에 흩어져 있기 때문",
    options: [
      { solution: "주요 포인트를 한 앱으로 통합 관리", effort: "낮음", cost: "무료" },
      { solution: "결제 전 포인트 확인을 결제 루틴에 포함", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "자주 쓰는 포인트/쿠폰 서비스 목록화",
      "통합 관리 앱에 등록",
      "결제 직전 확인하는 습관 만들기",
    ],
  },
  {
    id: 44,
    category: "금융",
    title: "커피/배달비 소액 지출이 쌓여 큼",
    problem: "소액 지출이라 신경 안 썼는데 합치면 크게 나간다",
    cause: "건당 금액이 작아 지출로 체감되지 않기 때문",
    options: [
      { solution: "소액 지출 전용 카테고리로 월별 합계 확인", effort: "낮음", cost: "무료" },
      { solution: "주 2~3회로 횟수 상한 정하기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "한 달치 소액 지출 합계 계산해보기",
      "합계를 보고 놀란 항목 하나 선택",
      "다음 달 그 항목 횟수 제한 정하기",
    ],
  },
  {
    id: 45,
    category: "금융",
    title: "연말정산/세금 서류를 매번 급하게 준비",
    problem: "연말정산 시즌마다 서류를 급하게 준비한다",
    cause: "관련 서류를 평소에 정리해두지 않기 때문",
    options: [
      { solution: "월별로 영수증/서류를 폴더에 바로 정리", effort: "낮음", cost: "무료" },
      { solution: "연말정산 체크리스트 미리 만들어두기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "작년 연말정산 때 급했던 서류 목록 정리",
      "매월 발생 서류를 바로 폴더에 저장",
      "11월에 미리 체크리스트로 점검",
    ],
  },
  {
    id: 46,
    category: "금융",
    title: "목표 저축액 없이 그냥 남는 돈만 저축",
    problem: "구체적인 목표 없이 남는 돈만 저축하고 있다",
    cause: "구체적인 저축 목표와 기한이 없기 때문",
    options: [
      { solution: "목표 금액과 기한을 구체적으로 설정", effort: "낮음", cost: "무료" },
      { solution: "월급일에 목표 금액 우선 자동이체(선저축)", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "구체적인 목표(금액, 기한, 용도) 정하기",
      "월급일 자동이체로 선저축 설정",
      "분기마다 진행 상황 점검",
    ],
  },
  {
    id: 47,
    category: "금융",
    title: "공동 지출(가족/모임) 정산이 매번 애매함",
    problem: "가족·모임 지출 정산이 매번 애매하게 넘어간다",
    cause: "지출 내역을 그때그때 기록하지 않아 나중에 헷갈리기 때문",
    options: [
      { solution: "정산 전용 앱으로 지출 즉시 기록", effort: "낮음", cost: "무료" },
      { solution: "모임비 통장을 따로 만들어 한 곳에서 관리", effort: "중간", cost: "무료" },
    ],
    steps: [
      "공동 지출용 정산 앱 또는 통장 선택",
      "지출 발생 즉시 기록하는 규칙 정하기",
      "모임 후 바로 정산 완료하기",
    ],
  },
  {
    id: 48,
    category: "금융",
    title: "재무 목표가 없어 돈이 어디로 가는지 모름",
    problem: "돈이 어디로 나가는지 명확히 파악되지 않는다",
    cause: "지출을 목적별로 구분해서 보지 않기 때문",
    options: [
      { solution: "1년/3년 단위 재무 목표 1개씩 정하기", effort: "중간", cost: "무료" },
      { solution: "월 지출을 고정/변동/저축 3개로 구분해 보기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "최근 1개월 지출을 3개 카테고리로 분류",
      "카테고리별 비중 확인",
      "비중을 보고 1개 재무 목표 설정",
    ],
  },

  // ── 기타 ──────────────────────────────────────
  {
    id: 49,
    category: "기타",
    title: "매번 못 찾는 리모컨, 열쇠",
    problem: "매일 나가기 전 물건을 찾느라 시간을 허비한다",
    cause: "물건을 놓는 지정 자리가 없어서 아무 데나 놓기 때문",
    options: [
      { solution: "현관 앞 트레이 하나 두기", effort: "낮음", cost: "5천원 내외" },
      { solution: "벽걸이 후크 + 라벨링", effort: "낮음", cost: "1만원 내외" },
    ],
    steps: [
      "오늘 물건 위치 3곳 파악",
      "현관 근처에 트레이/후크 배치",
      "1주일간 무조건 그 자리에만 놓기 규칙화",
    ],
  },
  {
    id: 50,
    category: "기타",
    title: "옷장이 꽉 차도 입을 옷이 없음",
    problem: "옷장은 꽉 찼는데 막상 입을 옷이 없다",
    cause: "안 입는 옷과 입는 옷이 섞여 있어 선택지가 헷갈리기 때문",
    options: [
      { solution: "1년간 안 입은 옷 별도 박스로 분리", effort: "중간", cost: "무료" },
      { solution: "옷걸이 방향 반대로 걸어 착용 여부 추적", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "모든 옷걸이를 반대 방향으로 걸기",
      "입을 때마다 정방향으로 되돌리기",
      "3개월 후 반대 방향 그대로인 옷 정리",
    ],
  },
  {
    id: 51,
    category: "기타",
    title: "냉장고 속 식재료를 못 챙겨 버림",
    problem: "냉장고 속 재료를 못 챙겨서 결국 버리게 된다",
    cause: "안에 무엇이 있는지 파악이 안 돼 잊어버리기 때문",
    options: [
      { solution: "냉장고 문에 재료 목록 화이트보드 부착", effort: "낮음", cost: "1만원 내외" },
      { solution: "장보기 전 냉장고 사진 찍고 확인", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "현재 냉장고 속 재료 전부 확인",
      "유통기한 임박 순으로 목록화",
      "이번 주 식단에 우선 반영",
    ],
  },
  {
    id: 52,
    category: "기타",
    title: "서류/영수증이 여기저기 굴러다님",
    problem: "서류와 영수증이 집안 곳곳에 굴러다닌다",
    cause: "받는 즉시 정리할 지정 장소가 없기 때문",
    options: [
      { solution: "서류함 하나를 '받는 즉시함'으로 지정", effort: "낮음", cost: "5천원 내외" },
      { solution: "영수증은 사진 찍고 바로 폐기", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "집 안에 서류 임시 보관함 1개 지정",
      "서류 받으면 무조건 그 자리에 넣기",
      "한 달에 한 번 분류/폐기 정리",
    ],
  },
  {
    id: 53,
    category: "기타",
    title: "사진이 휴대폰에 안 정리되고 쌓임",
    problem: "휴대폰에 사진이 정리되지 않고 계속 쌓인다",
    cause: "찍은 즉시 백업/정리하지 않고 방치하기 때문",
    options: [
      { solution: "클라우드 자동 백업 설정", effort: "낮음", cost: "무료~월 몇천원" },
      { solution: "월말에 흐릿한 사진 한번에 삭제하는 루틴", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "클라우드 자동 백업 켜기",
      "월말 알림 설정",
      "알림 오면 중복/흐린 사진 삭제",
    ],
  },
  {
    id: 54,
    category: "기타",
    title: "비밀번호를 자주 잊어버림",
    problem: "사이트마다 비밀번호가 달라 자주 잊어버린다",
    cause: "같은 규칙 없이 사이트마다 다르게 만들어서 기억하기 어렵기 때문",
    options: [
      { solution: "비밀번호 관리 앱 도입", effort: "낮음", cost: "무료~유료" },
      { solution: "기억 가능한 규칙 기반 생성법 정하기", effort: "중간", cost: "무료" },
    ],
    steps: [
      "자주 쓰는 계정 목록 정리",
      "비밀번호 관리 앱 설치 및 등록",
      "중요 계정은 2단계 인증 추가",
    ],
  },
  {
    id: 55,
    category: "기타",
    title: "택배 상자가 쌓여 처치 곤란",
    problem: "택배 상자가 계속 쌓여서 처치 곤란해진다",
    cause: "상자를 즉시 분리배출하지 않고 모아두기 때문",
    options: [
      { solution: "받는 즉시 분리배출 장소로 이동", effort: "낮음", cost: "무료" },
      { solution: "주 1회 정해진 요일에 한번에 정리", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "베란다/현관에 상자 임시 적재 구역 지정",
      "분리배출 요일 확인 후 알림 설정",
      "받는 즉시 임시 구역으로 옮기는 습관화",
    ],
  },
  {
    id: 56,
    category: "기타",
    title: "화분/식물을 자주 죽임",
    problem: "키우는 식물을 자꾸 죽이게 된다",
    cause: "물 주는 주기를 기억하지 못하고 감으로 판단하기 때문",
    options: [
      { solution: "식물별 물주기 알림 설정", effort: "낮음", cost: "무료" },
      { solution: "관리가 쉬운 식물로 교체", effort: "낮음", cost: "1만원대~" },
    ],
    steps: [
      "보유 식물별 적정 물주기 검색",
      "캘린더/알림 앱에 주기 등록",
      "한 달 후 식물 상태 확인",
    ],
  },
  {
    id: 57,
    category: "기타",
    title: "자주 쓰는 물건의 사용법을 매번 검색",
    problem: "자주 쓰는 기기인데도 사용법을 매번 다시 검색한다",
    cause: "설명서를 찾아보기 번거로워 매번 새로 검색하기 때문",
    options: [
      { solution: "자주 쓰는 기기 설명서를 사진 찍어 폴더에 저장", effort: "낮음", cost: "무료" },
      { solution: "자주 헷갈리는 기능은 메모해 기기에 라벨링", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "자주 검색하는 기기/기능 목록화",
      "설명서 사진 찍어 전용 폴더에 저장",
      "헷갈리는 버튼에 작은 라벨 부착",
    ],
  },
  {
    id: 58,
    category: "기타",
    title: "여행 짐 쌀 때마다 뭘 빠뜨림",
    problem: "여행 갈 때마다 뭔가 하나씩 빠뜨린다",
    cause: "매번 기억에 의존해 짐을 싸기 때문",
    options: [
      { solution: "기본 여행 체크리스트 템플릿 만들어두기", effort: "낮음", cost: "무료" },
      { solution: "여행 목적별(국내/해외/출장) 체크리스트 구분", effort: "중간", cost: "무료" },
    ],
    steps: [
      "지난 여행에서 빠뜨렸던 물건 떠올리기",
      "기본 체크리스트에 반영해 저장",
      "다음 여행부터 그대로 활용",
    ],
  },
  {
    id: 59,
    category: "기타",
    title: "반려동물 사료/물품 재주문 시기를 놓침",
    problem: "반려동물 사료가 떨어질 때쯤에야 재주문 시기를 알아챈다",
    cause: "재고량을 눈으로만 어림짐작하기 때문",
    options: [
      { solution: "정기배송 서비스로 자동 재주문 설정", effort: "낮음", cost: "기존 비용과 동일" },
      { solution: "재고 절반 남을 때 알림 설정", effort: "낮음", cost: "무료" },
    ],
    steps: [
      "현재 사료/물품 소진 주기 파악",
      "정기배송 또는 알림 설정",
      "한 번 주기 지나면 다시 점검",
    ],
  },
  {
    id: 60,
    category: "기타",
    title: "집 안 잡동사니(케이블, 부품)가 어디 있는지 모름",
    problem: "케이블이나 부품이 필요할 때 어디 있는지 찾을 수 없다",
    cause: "종류별로 구분 없이 한 서랍에 뒤섞여 있기 때문",
    options: [
      { solution: "소품 정리함으로 카테고리별 분리 보관", effort: "낮음", cost: "1만원대" },
      { solution: "라벨링으로 칸마다 이름 붙이기", effort: "낮음", cost: "5천원 내외" },
    ],
    steps: [
      "잡동사니를 한곳에 모아 종류별 분류",
      "정리함 칸별로 배치",
      "라벨 붙여 위치 고정",
    ],
  },
];

// 순환 시작 기준일 (이 날짜부터 60일 주기로 돌아감)
const EPOCH = new Date(2024, 0, 1);
const HISTORY_KEY = "daily-idea-history";
const HISTORY_DISPLAY_LIMIT = 14;

function daysSinceEpoch(date) {
  const utcEpoch = Date.UTC(EPOCH.getFullYear(), EPOCH.getMonth(), EPOCH.getDate());
  const utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((utcDate - utcEpoch) / (1000 * 60 * 60 * 24));
}

function getTodayKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getIdeaForDate(date) {
  const offset = daysSinceEpoch(date);
  const index = ((offset % IDEAS.length) + IDEAS.length) % IDEAS.length;
  return IDEAS[index];
}

function loadHistory() {
  try {
    const saved = localStorage.getItem(HISTORY_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

function saveHistory(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function recordToday(dateKey, idea) {
  const history = loadHistory();
  history[dateKey] = idea.id;
  saveHistory(history);
  return history;
}

function renderIdea(idea) {
  document.getElementById("category-badge").textContent = idea.category;
  document.getElementById("idea-title").textContent = idea.title;
  document.getElementById("idea-problem").textContent = idea.problem;
  document.getElementById("idea-cause").textContent = idea.cause;

  const optionsEl = document.getElementById("idea-options");
  optionsEl.innerHTML = "";
  idea.options.forEach((opt) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="option-solution">${opt.solution}</span>
      <span class="option-meta">난이도 ${opt.effort} · 비용 ${opt.cost}</span>
    `;
    optionsEl.appendChild(li);
  });

  const stepsEl = document.getElementById("idea-steps");
  stepsEl.innerHTML = "";
  idea.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsEl.appendChild(li);
  });
}

function renderHistory(history) {
  const listEl = document.getElementById("history-list");
  const emptyEl = document.getElementById("empty-history");
  listEl.innerHTML = "";

  const entries = Object.entries(history).sort((a, b) => (a[0] < b[0] ? 1 : -1));
  const recent = entries.slice(0, HISTORY_DISPLAY_LIMIT);

  if (recent.length === 0) {
    emptyEl.hidden = false;
    return;
  }
  emptyEl.hidden = true;

  recent.forEach(([dateKey, ideaId]) => {
    const idea = IDEAS.find((i) => i.id === ideaId);
    if (!idea) return;
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="history-date">${dateKey}</span>
      <span class="history-category">${idea.category}</span>
      <span class="history-title">${idea.title}</span>
    `;
    listEl.appendChild(li);
  });
}

function initApp() {
  const today = new Date();
  const dateKey = getTodayKey(today);
  const idea = getIdeaForDate(today);

  document.getElementById("idea-date").textContent =
    `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  renderIdea(idea);

  const history = recordToday(dateKey, idea);
  renderHistory(history);

  const toggleBtn = document.getElementById("toggle-btn");
  const detailEl = document.getElementById("idea-detail");
  toggleBtn.addEventListener("click", () => {
    const isHidden = detailEl.hidden;
    detailEl.hidden = !isHidden;
    toggleBtn.textContent = isHidden ? "해결 방법 접기 ▴" : "해결 방법 보기 ▾";
  });
}

document.addEventListener("DOMContentLoaded", initApp);
