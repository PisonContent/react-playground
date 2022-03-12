import {
    fileStructureError,
    trackMetadataError,
    albumMetadataError,
} from "../../assets/dummy";
import SectionSevenAnswer from "../SectionSevenAnswer";

const SectionSeven = ({ serverError, bulkSuccess }) => {
    function getRandomData() {
        const dataList = [fileStructureError, trackMetadataError, albumMetadataError, serverError, bulkSuccess];
        return dataList[Math.floor(Math.random() * 5)];
    }
    return (
        <section>
            <li>JSON데이터 처리하기 - 4</li>
            <p>서버에서 전송된 json 데이터를 파싱해서 유저에게 보여주세요.</p>
            <p>
                json 데이터는 4, 5, 6번에 나타난 것 이외에도 아래의 두 가지의 경우가 더
                나타날 수 있습니다.
            </p>
            <p>
                전송이 성공했을 경우에는 성공 메시지를 보여주고, 실패했을 경우에는 여러
                가지의 다른 구조를 가진 메시지를 에러 없이 모두 화면에 표시할 수 있어야
                합니다.
            </p>
            <code>SectionSeven 컴포넌트에 코딩하고 그 결과를 아래에서 확인하세요</code>

            {/* 랜덤하게 데이터가 로딩되는 버전으로 테스트해보기 */}
            {/* <SectionSevenAnswer data={getRandomData()}/> */}

            {/* 각각 데이터를 다르게 전달해서 테스트하기 */}
            {/* <SectionSevenAnswer data={fileStructureError}/> */}
            {/* <SectionSevenAnswer data={trackMetadataError}/> */}
            {/* <SectionSevenAnswer data={albumMetadataError}/> */}
            {/* <SectionSevenAnswer data={serverError}/> */}
            {/* <SectionSevenAnswer data={bulkSuccess}/> */}
            <pre>{JSON.stringify(serverError, null, 4)}</pre>
            <pre>{JSON.stringify(bulkSuccess, null, 4)}</pre>
        </section>
    );
};

export default SectionSeven;
