import styled from "@emotion/styled";

export const LoginPageStyle = styled.div`
  width: 1300px;
  /* text-align: center; */
  margin: 0 auto;
  /* background: skyblue; */
  padding-bottom: 120px;
`;
export const Logo = styled.div`
  margin: 0px auto 40px auto;
  width: 200px;
  height: 40px;
  background-color: #d9d9d9;
`;
export const LoginBox = styled.div`
  margin: 0 auto;
  /* box-sizing: border-box; */
  width: 450px;
  height: ${props => (props.height ? props.height : "540px")};
  /* height: 540px; */
  border-radius: 10px;
  border: 1px solid #2c39b5;
  padding-left: 30px;
  p {
    margin-top: 50px;
    margin-bottom: ${props => (props.mgbtm ? props.mgbtm : "160px")};

    color: #000;
    font-family: KyivType Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 350;
    line-height: normal;
  }
  li {
    position: relative;
    cursor: pointer;

    color: #000;
    font-family: KyivType Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
`;
export const IdBox = styled.input`
  width: 390px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #2c39b5;
  padding-left: 20px;

  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 10px;
`;
export const PwBox = styled(IdBox)`
  margin-bottom: 30px;
`;
export const LoginBt = styled.button`
  width: 390px;
  height: 50px;
  border-radius: 10px;
  background: #2c39b5;
  margin-bottom: 20px;

  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const DivisionLine = styled.div`
  width: 1px;
  height: 15px;
  background: #2c39b5;
`;
