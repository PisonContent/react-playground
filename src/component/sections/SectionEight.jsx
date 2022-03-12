import React, { Component } from "react";
import "./SectionEight.scss";

class SectionEight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrangement: []
        };
    }

    componentDidMount() {
        const { arrangement } = this.props;
        this.setState({
            arrangement,
        });
    }

    render() {
        const { arrangement } = this.props;
        return (
            <section className="SectionEight">
                <li>리액트 State 관리 - 1</li>
                <p>
                    서버에서 전송된 편곡자의 정보를 "하나의" Input 필드에 아래와 같은 모양으로 띄워주세요.
                </p>
                <p className="input-field">
                    한글이름(영어이름), 한글이름2(영어이름2)
                </p>
                <p>
                    유저가 확인 버튼을 누르면 원래 들어왔던 데이터 형식(아래 참조)으로 변환해서 State에 저장하면 됩니다.
                </p>
                <p>
                    Edge case 확인사항: 
                    <ul>
                        <li>'유저가 잘못된 괄호를 사용한다면?' 예) 한글이름(영어이름), 한글이름2[영어이름2]</li>
                        <li>'유저가 쉼표를 입력하지 않는다면?' 예) 한글이름(영어이름)한글이름2[영어이름2]</li>
                        <li>'유저가 쓰다 말고 확인 버튼을 누른다면?' 예) 한글이름(영어이름)한글이</li>
                    </ul>
                </p>
                <p>아래는 데이터의 모양 입니다.</p>
                <code>여기에 인풋 필드 생성하기</code>
                <pre>{JSON.stringify(arrangement, null, 4)}</pre>
            </section>
        );
    }
}

export default SectionEight;
