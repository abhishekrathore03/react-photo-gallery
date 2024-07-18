import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
const LoadingImage = styled.img``;

export const LoadingSpinner = () => {
    return (
        <Wrapper>
            <LoadingImage src="spinner.svg" alt="Loading ..." />
        </Wrapper>
    )
};