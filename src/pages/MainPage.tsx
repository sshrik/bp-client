import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from 'components/Container.style';
import MovingLogo from 'components/MovingLogo';
import { useFetchGithub } from 'hooks/useFetchGithub';

const MainPage: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const { t } = useTranslation();

  const { data, isLoading } = useFetchGithub();

  console.log(data, isLoading);

  return (
    <S.Container>
      <MovingLogo clicked={clicked} setClicked={setClicked} />
      <S.ProjectInforContainer>
        <S.ProjectHeader>{t('header')}</S.ProjectHeader>
        <S.ProjectDetail>
          <p>{t('info.0')}</p>
          <a href="https://github.com/sshrik/bp-client">{t('info.1')}</a>
        </S.ProjectDetail>
      </S.ProjectInforContainer>
    </S.Container>
  );
};

export default MainPage;
