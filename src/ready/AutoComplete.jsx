import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const AutocompleteInput = ({ address, setAddress }) => {
  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address) => {
    setAddress(address);
    try {
      const results = await geocodeByAddress(address);
      const { lat, lng } = await getLatLng(results[0]);
      console.log("📍 Coordinates: ", { lat, lng });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Ingresa la dirección',
              className: 'form-control',
              required: true,
            })}
          />
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? '#41b6e6' : '#fff'
              };
              return (
                <div {...getSuggestionItemProps(suggestion, { style })}>
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default AutocompleteInput;
