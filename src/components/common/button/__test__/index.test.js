import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Button } from "../index";
import { T } from "../../../../translations";

afterEach(cleanup);

it('button renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
})

it('renders button correctly', () => {
    const translation = T('try_again');
    const { getByTestId } = render(<Button text='try_again' />);
    expect(getByTestId('button')).toHaveTextContent(translation);
})

it('renders button correctly', () => {
    const translation = T('screen');
    const { getByTestId } = render(<Button text='screen' />);
    expect(getByTestId('button')).toHaveTextContent(translation);
})

it('matches snapshot', () => {
    const tree = renderer.create(<Button text='snapshot' />).toJSON();
    expect(tree).toMatchSnapshot();
})