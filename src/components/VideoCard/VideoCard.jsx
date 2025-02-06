import styled from "styled-components"

const VideoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        scale: 1.04;
    }
`

const Thumbnail = styled.img`
    width: 100%;
    border-radius: 10px;
`

const InfosContainer = styled.div`
    display: flex;
    gap: 10px;
`

const ImgChannel = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const TextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #616161;
`

const Title = styled.h3`
    font-size: 1rem;
    color: #fff;
`

const TextInfo = styled.p`
    font-size: 0.8rem;
`

const ViewsTime = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    i {
        font-size: 0.4rem;
    }
`

const VideoCard = ({ video }) => {
    return (
        <VideoCardContainer>
            <Thumbnail src={video.imagem_capa} alt={video.titulo} />
            <InfosContainer>
                <ImgChannel src={video.foto_canal} alt={video.canal} />
                <TextsContainer>
                    <Title>{video.titulo}</Title>
                    <TextInfo>{video.canal}</TextInfo>
                    <ViewsTime>
                        <TextInfo>{video.visualizacoes} de visualizações</TextInfo>
                        <i className="fa-solid fa-circle"></i>
                        <TextInfo>{video.tempo_postagem}</TextInfo>
                    </ViewsTime>
                </TextsContainer>
            </InfosContainer>
        </VideoCardContainer>
    )
}

export default VideoCard