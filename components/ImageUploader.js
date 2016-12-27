/**
 * Created by shayl on 12/25/2016.
 */
import React from 'react';

export default class ImageUploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data_uri: null,
            textValue: null
        };

        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        // this.setState({
        //     uploaded_uri: this.state.data_uri
        // });

        this.props.onSubmit(this.state.data_uri);

    }
    handleChange(e){
        this.setState({
            textValue: e.target.value
        });
    }
    render (){
        let uploaded;
        let imageTitle;
        if (this.state.uploaded_uri){
            uploaded = (
                <div>
                    <img className='image-preview' src={this.state.uploaded_uri} />
                </div>
            );
        }
        if (this.state.textValue){
            imageTitle = (
              <div>
                  {this.state.textValue}
              </div>
            );
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Image Title</label>
                <input type="text" onChange={this.handleChange} />
                <label>Create New Category</label>
                <input type="text" />
                <input type="file" className="image-uploader" onChange={this.handleFile} />
                <input type="submit" />
                <div>
                    <strong>Image Title:</strong> {imageTitle}
                </div>
                <div>Uploaded Image: {uploaded}</div>
                <div className="main-window-sidebar">
                    {this.props.children}
                </div>
            </form>
        );
    }
}

