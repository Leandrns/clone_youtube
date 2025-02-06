import styled from "styled-components";
import VideoCard from "../VideoCard/VideoCard";

const VideosGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 24px;
    justify-items: center;
    justify-content: flex-end;
    padding: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #151515;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: #555555;
	}

    @media screen and (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const VideosGrid = ({ videos }) => {
    return (
        <VideosGridContainer>
            {
                videos.map(video => (
                    <VideoCard video={video} />
                ))
            }
        </VideosGridContainer>
    )
}

export default VideosGrid