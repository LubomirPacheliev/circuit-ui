/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, ThemeProvider } from '@emotion/react';
import { light } from '@sumup/design-tokens';
import { Body } from '@sumup/circuit-ui';

const Box = styled('div')`
  ${({ theme, spacingName }) => css`
    width: ${theme.spacings[spacingName]};
    height: ${theme.spacings[spacingName]};
    background-color: ${theme.colors.r300};
    margin-right: ${theme.spacings.mega};
  `};
`;

const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.mega};
  `};
`;

const SpacingSize = styled('span')`
  ${({ theme }) => css`
    color: ${theme.colors.n500};
  `};
`;

const SpacingName = styled(Body)`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.kilo};
    color: ${theme.colors.n500};
  `};
`;

const Spacing = ({ spacingName }) => (
  <ThemeProvider theme={light}>
    <Wrapper>
      <Box spacingName={spacingName} />
      <div>
        <Body as="span">{spacingName}</Body>
        <SpacingSize>
          <SpacingName size="two" as="span">
            {light.spacings[spacingName]}
          </SpacingName>
        </SpacingSize>
      </div>
    </Wrapper>
  </ThemeProvider>
);

Spacing.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  spacingName: PropTypes.string.isRequired,
};

export default Spacing;
