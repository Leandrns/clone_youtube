import styled from "styled-components";
import logoYoutube from "../../assets/youtube.svg";
import { useState } from "react";

const HeaderContainer = styled.header`
    background-color: #151515;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    position: sticky;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 768px) {
        button {
            font-size: 0.9rem;
        }
    }
`

const MenuLogoContainer = styled.div`
    display: flex;
    gap: 20px;

    a {
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        gap: 10px;

        img {
            height: 14px;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            margin-right: 10px;
        }
    }
`

const TransparentButton = styled.button`
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.2rem;
    border-radius: 50%;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #303030;
        cursor: pointer;
    }
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 36px;
`

const InputSearch = styled.input`
    height: 100%;
    width: 85%;
    background-color: transparent;
    border-radius: 20px 0 0 20px;
    border: 1px solid #333;
    font-size: 1rem;
    padding: 0 16px;
    color: #fff;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }
`

const ResultSearch = styled.div`
    display: ${props => props.isFocus ? 'block' : 'none'};
    position: absolute;
    top: 56px;
    max-height: 480px;
    width: 42%;
    background-color: #222;
    border-radius: 12px;
    overflow-y: auto;
    padding: 10px 0;

    &::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #222;
		border-radius: 0 10px 10px 0;
	}

	&::-webkit-scrollbar-thumb {
		background: #555555;
        border-radius: 10px;
	}

    @media screen and (max-width: 768px) {
        width: 41%;
    }

    @media screen and (max-width: 480px) {
        width: 47%;
    }
`

const ResultSearchItem = styled.div`
    display: flex;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    text-transform: lowercase;
    padding: 8px 16px;

    &:hover {
        background-color: #303030;
    }
`

const ButtonSearch = styled.button`
    height: 100%;
    background-color: #343434;
    border: 1px solid #333;
    font-size: 1rem;
    padding: 0 12px;
    border-radius: 0 20px 20px 0;
    color: #fff;
    transition: background-color 0.3s;

    &:hover {
        background-color: #404040;
        cursor: pointer;
    }
`

const ButtonVoiceSearch = styled.button`
    border: none;
    height: 100%;
    border-radius: 50%;
    background-color: #343434;
    font-size: 1rem;
    color: #fff;
    padding: 0 12px;
    margin-left: 16px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #404040;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        margin-left: 6px;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`

const OptionsContainer = styled.div`
    display: flex;
    gap: 30px;

    @media screen and (max-width: 768px) {
        gap: 8px;
    }
`

const CreateButton = styled.button`
    border: none;
    background-color: #343434;
    border-radius: 20px;
    font-size: 1rem;
    color: #fff;
    padding: 6px 20px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #404040;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Header = ({ videos, setSidebarShort, isSidebarShort, setSidebarOpen, isSidebarOpen }) => {
    const [inputFocus, setInputFocus] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVideos = videos.filter(video => video.titulo.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <HeaderContainer>
            <MenuLogoContainer>
                <TransparentButton onClick={() => {
                    setSidebarShort(!isSidebarShort);
                    setSidebarOpen(!isSidebarOpen);
                    }}>
                    <i class="fa-solid fa-bars"></i>
                </TransparentButton>
                <a href="/"><img src={logoYoutube} alt="Youtube" /></a>
            </MenuLogoContainer>

            <SearchContainer>
                <InputSearch type="text" value={searchTerm} placeholder="O que você quer assistir hoje?"
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => {setInputFocus(false); setSearchTerm('')}}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <ButtonSearch><i class="fa-solid fa-search"></i></ButtonSearch>
                <ButtonVoiceSearch><i class="fa-solid fa-microphone"></i></ButtonVoiceSearch>
                <ResultSearch isFocus={inputFocus}>
                    {filteredVideos.map(video => (
                        <ResultSearchItem>{video.titulo}</ResultSearchItem>
                    ))}
                </ResultSearch>
            </SearchContainer>

            <OptionsContainer>
                <CreateButton>Criar +</CreateButton>
                <TransparentButton><i class="fa-solid fa-bell"></i></TransparentButton>
                <TransparentButton><i class="fa-solid fa-user"></i></TransparentButton>
            </OptionsContainer>
        </HeaderContainer>
    );
};

export default Header;