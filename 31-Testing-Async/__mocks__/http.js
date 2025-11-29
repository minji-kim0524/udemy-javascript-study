// 테스트를 실행할 때 실제 함수를 대체할 함수 생성

const fetchData = () => {
  return Promise.resolve({ title: "delectus aut autem" });
};

exports.fetchData = fetchData;
