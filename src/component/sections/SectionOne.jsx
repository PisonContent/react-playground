const SectionOne = ({ meData }) => (
    <section className="bulk-upload-section">
        <li>벌크 업로드 권한 확인하기</li>
        <p>
            meData의 프로필 - authority - "음원 유통 신청 벌크 업로드 권한" 의 checked
            값이 참일 경우 component 폴더에 있는 "BulkUpload"를 보여주는 코드를
            만들어주세요
        </p>
        <p>아래는 데이터의 모양 입니다.</p>
        <code>여기에 벌크 업로드 컴포넌트 보여주기</code>
        <pre>{JSON.stringify(meData, null, 4)}</pre>
    </section>
);

export default SectionOne;
