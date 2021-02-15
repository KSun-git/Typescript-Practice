{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  /**
   * Ans...
   */
  function printLoginState(res:ResourceLoadState){
    switch(res.state){
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(res.response.body);
        break;
      case 'fail':
        console.log(res.reason);
        break;
      default:
        throw new Error('unknown State...');
        break;
    }
  }

}
