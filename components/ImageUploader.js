/**
 * Created by shayl on 12/25/2016.
 */
import React from 'react';

export default class ImageUploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data_uri: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFile(e) {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onload = (upload) => {
            this.setState({
                data_uri: upload.target.result,
                filename: file.name,
                filetype: file.type
            });
        };
        reader.readAsDataURL(file);
    }
    handleSubmit(e){
        e.preventDefault();
        let imageURL = this.state.data_uri;
        console.log(imageURL);
    }
    render (){
        let uploaded;
        if (this.state.data_uri){
            uploaded = (
                <div>
                    <img className='image-preview' src={this.state.data_uri} />
                </div>
            );
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Image Title</label>
                <input type="text" />
                <label>Create New Category</label>
                <input type="text"/>
                <input type="file" className="image-uploader" onChange={this.handleFile} />
                <input type="submit" />
                {uploaded}
            </form>
        );
    }
}

