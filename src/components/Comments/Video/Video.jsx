import '../Video.scss';

function Video({singleVideo, handlePhotoClick}) {
	
	return (
		<div className='video' onClick={()=>{handleVideoClick(singleVideo.id)}}>
			<div className='video__content'>
				<img className='video__img' src={singlePhoto.url} alt={singlePhoto.description} />
			</div>
			<h4 className='video__title'>{singlePhoto.description}</h4>
		</div>
	);
}

export default Video;