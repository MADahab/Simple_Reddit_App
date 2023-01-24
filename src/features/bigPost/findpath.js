//helper function to find a value of nested key object 

      export const dig = (obj, target) =>
        target in obj
          ? obj[target]
          : Object.values(obj).reduce((acc, val) => {
              if (acc !== undefined) return acc;
              if (typeof val === 'object') return dig(val, target);
            }, undefined);
  

/*
      for(const i in post) {
        try {
          console.log(post.media.reddit_video.scrubber_media_url);
        }
        catch(e) {
          ; // console.log("err:", e);
        }
        try {
          console.log(post.secure_media.reddit_video.scrubber_media_url);
        }
        catch(e) {
          ; // console.log("err:", e);
        }
        try {
          console.log(post.preview.reddit_video_preview.scrubber_media_url);
        }
        catch(e) {
          ; // console.log("err:", e);
        }
      } 
      */