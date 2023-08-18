import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  font-family: 'Roboto';
`

export const CourseTitle = styled.h1`
  color: #171f46;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
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
  margin-left: 4px;
  line-height: 1.2;
`

export const CourseDescription = styled.p`
  color: #1e293b;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0px;
`

export const CourseTagsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

export const CourseTagItem = styled.li`
  list-style-type: none;
`

export const CourseTag = styled.p`
  color: #25262c;
  background-color: #e2e8f0;
  font-size: 10px;
  font-weight: 500;
  border-radius: 4px;
  line-height: 1.6;
  padding: 4px 8px;
  margin-bottom: 8px;
  margin-right: 8px;
`
