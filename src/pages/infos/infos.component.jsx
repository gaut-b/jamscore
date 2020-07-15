import React from 'react';
import { connect } from 'react-redux';
import { setTitle, setAuthor }from '../../redux/chordSheet/pageInfos/pageInfos.actions';
import './infos.styles.scss';

const Infos = ({ setTitle, setAuthor, title, author, ...props }) => {

    return (
        <div class="infos-container">
            <h1>Set infos</h1>
            <form>
                <label>Title</label>
                <input
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    placeholder = "Enter the tune's name"
                    value={title}
                />
                <label>Author</label>
                <input
                    type="text"
                    onChange={e => setAuthor(e.target.value)}
                    placeholder = "Enter the author's name"
                    value={author}
                />
            </form>
        </div>
    );
};

const mapStateToProps = ({ pageInfos }) => ({
    title: pageInfos.title,
    author: pageInfos.author,
});

const mapDispatchToProps = (dispatch) => ({
    setTitle: (title) => dispatch(setTitle(title)),
    setAuthor: (title) => dispatch(setAuthor(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Infos);