import { Component } from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  background: rgb(255, 255, 255);
  max-width: 850px;
  margin: auto;
  border-radius: 4px 4px 0px 0px;
`;

const StyledListItem = styled.div`
  margin: 0px 60px;
  border-bottom: 1px solid rgb(233, 233, 233);
  padding: 20px 0px;
`;

const StyledListItemTitle = styled.h2`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: rgb(0, 0, 0);
`;

const StyledListItemExcerpt = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.75);
`;

class List extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <StyledList>
        {
          data?.map(({title, excerpt}) => (
            <StyledListItem>
              <StyledListItemTitle>
                {title}
              </StyledListItemTitle>
              <StyledListItemExcerpt>
                {excerpt}
              </StyledListItemExcerpt>
            </StyledListItem>
          ))
        }
      </StyledList>
    )
  }
}

export default List;

