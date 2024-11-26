import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value);
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div
      className={`bucket-row ${item.isComplete ? 'complete' : ''} ${item.eagerness}`}
      key={item.id}
    >
      <div onClick={() => props.completeBucketItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}>✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}>🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;


// import { useState } from 'react';
// import BucketForm from './BucketForm';

// function Bucket(props) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: '',
//     eagerness: '',
//   });

//   console.log(props.bucket);

//   const submitUpdate = (value) => {
//     props.editBucketItem(edit.id, value); // TODO: Write logic to call the editBucketItem prop with the supplied values

//     setEdit({ // TODO: Set the key:value pairs in the `edit` object back to empty strings
//       id: null,
//       value: '',
//       eagerness: '',
//     });
//   };

//   // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
//   if (edit.id) {
//     return <BucketForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return props.bucket.map((item, index) => (
//     <div
//       className={`bucket-row ${item.isComplete ? 'complete' : ''} ${item.eagerness}`}
//       key={index}
//     >
//       <div onClick={() => props.completeBucketItem(item.id)}>
//         {item.value} {/* TODO: Add the item text here */}
//       </div>
//       <div className="icons">
//         {/* TODO: Add an onClick event update the edit object with the id, value, and eagerness properties */}
//         <p onClick={() => setEdit({ id: item.id, value: item.value, eagerness: item.eagerness })}> ✏️</p> {/* Fixed typo: item:id to item.id */}
//         {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the item.id */}
//         <p onClick={() => props.removeBucketListItem(item.id)}> 🗑️</p>
//       </div>
//     </div>
//   ));
// }

// export default Bucket;