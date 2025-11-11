import React, { useRef } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { Link } from 'react-router';

const GalleryCard = ({ art, handleDelete, }) => {
    console.log(art)
    const updateModalRef = useRef(null)
    const handleClick = () => {
        handleDelete(art._id)
    }
    const handleShowModal = () => {
        updateModalRef.current.showModal()
    }
    const updateModal = () => {
        console.log('update modal')
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl border-gray-400 border-2">
                <figure>
                    <img src={art?.imageUrl} alt={art?.title} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{art.title}</h2>
                    <p>Artist: {art.artistName}</p>
                    <p>Category: {art.category}</p>
                    <p className="flex items-center gap-2 text-lg font-medium">
                        <BiSolidLike size={24} className="text-blue-500" />
                        Likes: {art.likes ?? 0}
                    </p>
                    <div className='flex justify-end gap-2.5'>
                        <button onClick={handleClick} className='btn btn-outline border-[#b89e4f] text-primary hover:bg-secondary hover:text-white'>Delete</button>
                        <div className="">
                            <Link to={`/Update/${art._id}`} className="btn btn-primary">
                                Update
                            </Link>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            {/* <dialog ref={updateModalRef} className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h2 className="text-2xl font-bold text-center mb-6">Update Your Artwork</h2>
                                    <div className="modal-action">
                                        <form className='space-y-4' method="dialog">
                                            <input type="text" placeholder="Image URL" defaultValue={art.imageUrl} name="imageUrl" className="input input-bordered w-full" required />
                                            <input type="text" placeholder="Title" defaultValue={art?.title} name="title" className="input input-bordered w-full" required />
                                            <input type="text" placeholder="Category" defaultValue={art?.category} name="category" className="input input-bordered w-full" required />
                                            <input type="text" placeholder="Medium / Tools" defaultValue={art.medium} name="medium" className="input input-bordered w-full" required />
                                            <textarea placeholder="Description" defaultValue={art.description} name="description" className="input input-bordered w-full h-24" required />
                                            <input type="text" placeholder="Dimensions (optional)" defaultValue={art.dimensions} name="dimensions" className="input input-bordered w-full" />
                                            <input type="text" placeholder="Price (optional)" name="price" defaultValue={art.price} className="input input-bordered w-full" />
                                            <select name="visibility" className="input input-bordered w-full" defaultValue="true">
                                                <option value="true">Public</option>
                                                <option value="false">Private</option>
                                            </select>
                                            <button type="submit" className="btn btn-primary w-full">Update Artwork</button>

                                            {/* if there is a button in form, it will close the modal */}
                                            {/* <button onClick={updateModal} className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog> */} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;