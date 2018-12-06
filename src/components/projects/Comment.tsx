import * as React from 'react'

interface IpropsType {
    projectid: any
    [key:string]:any
}
class Comment extends React.Component<  IpropsType > {
  public render()
  {
    return (
      <section className="comment">
          <div className="container">
            <div className='bg-white p-4 mt-3'>
              <div id="disqus_thread"/>
            </div>
          </div>
      </section>
    )
  }
  public componentDidMount()
  {
    const Window:any = window;
    const url = Window.location.href;
    const identifier = this.props.projectid;
    // if first time or not 
    if(Window.DISQUS)
    {
      Window.DISQUS.reset({
        reload: true,
        config() {  
          this.page.url = url;
          this.page.identifier = identifier;
          this.language ='en';
        }
      });
    } else {
      // disqus_config config var 
      Window.disqus_config = function () { 
        this.page.url = url;
        this.page.identifier = identifier;
        this.language ='en';
      };
      // add disqus script in first time commant
      (() => { // DON'T EDIT BELOW THIS LINE
      const s = document.createElement('script') as HTMLScriptElement;
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://mario-plan.disqus.com/embed.js';
      s.setAttribute('data-timestamp', `${+new Date()}`);
      (document.head || document.body).appendChild(s);
      })();
    }             
  }
}
 export default Comment;