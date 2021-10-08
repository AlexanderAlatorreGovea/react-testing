import { render, screen } from '@testing-library/react';
import { Example5 } from './Example5';

//this will mock the file called with the same name as the mock
jest.mock('../../VeryComplex/DeepFolder/DeeperFolder/VeryComplex');

describe('Example 5', () => {
  it('renders very complex component', () => {
    render(<Example5 />);
    expect(screen.getByText('SIMPLE VERSION')).toBeInTheDocument();
  });
});
