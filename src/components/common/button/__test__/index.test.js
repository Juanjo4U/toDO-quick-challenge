import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Button } from "../index";
import { T } from "../../../../translations";
import { constants } from "../../../../utils/constants";

afterEach(cleanup);

it('button renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
})

describe('when button renders correctly', () => {
    const translationKey = 'add_ToDo';
    const translation = T(translationKey);

    it(`renders button correctly with translation of ${translationKey} which is equal to: ${translation}`, () => {
        const { getByTestId } = render(<Button text={translationKey} />);
        expect(getByTestId(constants.TEST.buttonID)).toHaveTextContent(translation);
    })

    describe('its able to add another className', () => {
        const className = 'errorBackground';
        it(`it should have the class: ${className}`, () => {
            const { getByTestId } = render(<Button text={translationKey} className={className} />);
            const btn = getByTestId(constants.TEST.buttonID);
            expect(btn).toHaveClass(className);
        })
    })

    it('event click fires correctly', () => {
        const handleClick = jest.fn()
        const { getByTestId } = render(<Button text={translationKey} onClick={handleClick} />);
        fireEvent.click(getByTestId(constants.TEST.buttonID));
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('matches snapshot', () => {
        const tree = renderer.create(<Button text='snapshot' />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})