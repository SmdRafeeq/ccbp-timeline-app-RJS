import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 7px 0px;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`

export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Roboto';
`

export const ProjectTitle = styled.h1`
  color: #171f46;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Duration = styled.p`
  color: #171f46;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 4px;
`

export const ProjectDescription = styled.p`
  color: #1e293b;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0px;
`

export const VisitLink = styled.a`
  text-align: center;
  color: #0967d2;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  margin-top: 5px;
`
