import dogList from "../helper/dogList";

const SectionThree = () => (
    <section>
        <li>간단한 API 구성하기 - 2</li>
        <p>
            두 개의 인풋 필드에서 강아지의 "종"과 원하는 사진의 "갯수"를 입력받아서
            "SUBMIT" 버튼을 누르면 해당하는 종의 강아지 사진이 갯수만큼 나오도록 하는
            코드를 작성하세요.
        </p>
        <p>아래는 API endpoint와 검색 가능한 강아지 종의 리스트입니다</p>
        <code>여기에 강아지 사진 보여주기</code>
        <pre>https://dog.ceo/api/breed/종류/images/random/갯수</pre>
        {dogList()}
    </section>
);

export default SectionThree;