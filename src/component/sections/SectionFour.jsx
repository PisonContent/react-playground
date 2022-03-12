const SectionFour = ({ fileStructureError }) => (
    <section>
        <li>JSON데이터 처리하기 - 1</li>
        <p>
            아래와 같이 서버에서 전송된 json 에러메시지를 유저가 잘 알아볼 수 있게
            리액트로 코딩해주세요.
        </p>
        <p>아래는 데이터의 모양 입니다.</p>
        <code>여기에 에러 메시지 보여주기</code>
        <pre>{JSON.stringify(fileStructureError, null, 4)}</pre>
    </section>
);

export default SectionFour;
