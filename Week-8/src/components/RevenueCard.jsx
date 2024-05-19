import { Fragment } from "react";
import PropTypes from 'prop-types';

const RevenueCard=({title, orderCount, amount})=> {
  return (
    <Fragment>
        <div className="bg-white rounded shadow-md p-5 flex-col min-w-[300px]">
            <div className="flex">
                {title}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
            </div>
            <div className="flex justify-between pt-2">
                <div className="font-semibold text-2xl">
                    $ {amount}
                </div>
                <div className="flex items-center">
                    {orderCount ? (
                        <Fragment>
                            <div className="text-blue-500 underline font-semibold">{orderCount} order(s)</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-5 h-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </Fragment>
                                ) : null}
                </div>
            </div>
        </div>
    </Fragment>
  )
}
RevenueCard.propTypes = {
    title: PropTypes.string.isRequired,
    orderCount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number])
  };

export default RevenueCard;