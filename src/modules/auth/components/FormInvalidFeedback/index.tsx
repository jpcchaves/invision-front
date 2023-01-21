interface FormInvalidFeedBackI {
	message: string;
}

const FormInvalidFeedback = ({ message }: FormInvalidFeedBackI) => {
	return <span className="text-red-500 mb-1 text-sm">{message}</span>;
};

export default FormInvalidFeedback;
