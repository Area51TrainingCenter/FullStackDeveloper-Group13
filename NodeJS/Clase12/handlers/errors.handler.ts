export interface IError extends Error {
	status?: number
}

const catchAsync = (ftn: (req, res, next) => Promise<any>) => {
	return (rq, rs, nx) => {
		return ftn(rq, rs, nx).catch(error => {
			nx(error)
		})
	}
}

const pathNotFound = (req, res, next) => {
	const error: IError = new Error("Path not found")
	error.status = 404

	next(error)
}

const general = (error: IError, req, res, next) => {
	res
		.status(error.status)
		.json({
			name: error.name,
			message: error.message,
			stack: error.stack
		})
}

export { catchAsync, general, pathNotFound }