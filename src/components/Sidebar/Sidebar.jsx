import styled from "styled-components";

const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	height: calc(100vh - 56px);
	width: ${props => props.isSidebarShort ? '8%' : '20%'};
	overflow-y: auto;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #151515;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: transparent;
		border-radius: 10px;
	}

	&:hover {
		&::-webkit-scrollbar-thumb {
            background: #333;
        }
	}

	@media screen and (max-width: 1080px) {
        width: 12%;
    }

	@media screen and (max-width: 768px) {
		transition: all 0.2s ease-in-out;
		transform: ${props => props.isSidebarOpen ? 'translateX(0)' : 'translateX(-200px)'};
		position: absolute;
		width: 200px;
		z-index: 1;
		background-color: #151515;
    }
`;

const SidebarOption = styled.button`
	display: flex;
	flex-direction: ${props => props.isSidebarShort ? 'column' : 'row'};
	align-items: center;
	text-align: left;
	width: 100%;
	justify-content: flex-start;
	gap: ${props => props.isSidebarShort ? '10px' : '24px'};
	border: none;
	border-radius: 8px;
	background-color: transparent;
	padding: ${props => props.isSidebarShort ? '14px 12px' : '10px 12px'};
	color: #fff;
	transition: background-color 0.3s ease-in-out;

	i {
		font-size: 1.1rem;
        width: 20px;
	}

	p {
		font-size: ${props => props.isSidebarShort ? '10px' : '14px'};
	}

	&:hover {
		background-color: #303030;
		cursor: pointer;
	}

	@media screen and (max-width: 1080px) {
        flex-direction: column;
		gap: 10px;
		padding: 14px 12px;

		i {
			width: auto;
		}

		p {
			font-size: 10px;
		}
    }

	@media screen and (max-width: 768px) {
        flex-direction: row;

		i {
			width: 20px;
		}
    }
`;

const Title = styled.h3`
	font-size: 1rem;
	color: #fff;
	margin-bottom: 10px;
	padding-left: 10px;
`;

const MainOptions = styled.div`
	display: ${props => props.isSidebarShort ? 'none' : 'flex'};
	flex-direction: column;
`;

const Options = styled.div`
	display: ${props => props.isSidebarShort ? 'none' : 'flex'};
	flex-direction: column;

	@media screen and (max-width: 1080px) {
        display: none;
    }

	@media screen and (max-width: 768px) {
        display: flex;   
    }
`;

const Line = styled.hr`
	display: ${props => props.isSidebarShort ? 'none' : 'block'};
	width: 100%;
	border: 1px solid #333;
	margin: 16px 0;

	@media screen and (max-width: 1080px) {
        display: none;
    }

	@media screen and (max-width: 768px) {
        display: block;   
    }
`;

const Sidebar = ({ isSidebarShort, isSidebarOpen }) => {
	const iconsMain = ["house", "fire", "pen", "user"];
	const textsMain = ["Início", "Em alta", "Inscrições", "Você"];

	const iconsYou = ["clock-rotate-left", "play", "video", "clock", "thumbs-up"];
	const textsYou = [
		"Histórico",
		"Playlists",
		"Seus vídeos",
		"Assistir mais tarde",
		"Vídeos com 'Gostei'",
	];

    const iconsExplore = ["store", "music", "gamepad", "film", "tower-broadcast"];
    const textsExplore = ["Loja", "Música", "Jogos", "Filmes", "Transmissões"];

	return (
		<SidebarContainer isSidebarShort={isSidebarShort} isSidebarOpen={isSidebarOpen}>
			<MainOptions>
				{iconsMain.map((icon, index) => (
					<SidebarOption key={icon} isSidebarShort={isSidebarShort}>
						<i class={`fa-solid fa-${icon}`}></i>
						<p>{textsMain[index]}</p>
					</SidebarOption>
				))}
			</MainOptions>
			<Line isSidebarShort={isSidebarShort} />
			<Options isSidebarShort={isSidebarShort}>
				{iconsYou.map((icon, index) => (
					<SidebarOption key={icon}>
						<i class={`fa-solid fa-${icon}`}></i>
						<p>{textsYou[index]}</p>
					</SidebarOption>
				))}
			</Options>
			<Line isSidebarShort={isSidebarShort} />
			<Options isSidebarShort={isSidebarShort}>
				<Title>Explorar</Title>
				{iconsExplore.map((icon, index) => (
                    <SidebarOption key={icon}>
                        <i class={`fa-solid fa-${icon}`}></i>
                        <p>{textsExplore[index]}</p>
                    </SidebarOption>
                ))}
			</Options>
		</SidebarContainer>
	);
};

export default Sidebar;
