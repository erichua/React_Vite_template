import * as React from 'react';
interface properties{
  error?: Error
}

function LoadingORError({error}: properties):React.ReactNode {
  return (
		<div className='flex min-h-screen items-center justify-center'>
			<h1 className='text-xl' data-testid='LoadingOrError'>
				{error ? error.message : 'Loading...'}
			</h1>
		</div>
  );
}
LoadingORError.defaultProps = {
  error: undefined,
}
export default LoadingORError;
