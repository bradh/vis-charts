/**
 * Created by Alex on 4/21/2015.
 */

/**
 * it works like this:
 *
 *   the toggle row has the onclick with the table id, the parent name and this. The function will look through all trs with matching parent and check the class
 *   if hidden, it shows them, else it hides them.
 *
 *   The caret is also flipped and the toggle class is changed.
 *
 *
 <tr class='toggle collapsible' onclick="toggleTable('physicsTable','barnesHut', this);"><td><span parent="barnesHut" class="right-caret"></span> barnesHut</td></tr>
 <tr parent="barnesHut" class="hidden"><td>barnesHut.gravitationalConstant</td></tr>
 <tr parent="barnesHut" class="hidden"><td>barnesHut.centralGravity</td></tr>
 <tr parent="barnesHut" class="hidden"><td>barnesHut.springLength</td></tr>
 <tr parent="barnesHut" class="hidden"><td>barnesHut.springConstant</td></tr>
 <tr parent="barnesHut" class="hidden"><td>barnesHut.damping</td></tr>
 *
 *
 * @param tableId
 * @param parent
 * @param clickedRow
 */
function toggleTable(tableId, parent, clickedRow) {
  var table = document.getElementById(tableId);
  var wasOpen = false;
  for (var i = 0, row; row = table.rows[i]; i++) {
    if (row.getAttribute('parent') === parent) {
      if (row.className.indexOf('hidden') !== -1) {
        row.className = row.className.replace(' hidden','').replace('hidden','');
        row.className += ' visible';
      }
      else {
        row.className = row.className.replace(' visible','').replace('visible','');;
        row.className += ' hidden';
        wasOpen = true;
      }
    }
  }

  var spans;
  if (wasOpen === true) {
    spans = document.getElementsByClassName('caret');
    clickedRow.className += ' collapsible';
  }
  else {
    spans = document.getElementsByClassName('right-caret')
    clickedRow.className = clickedRow.className.replace(' collapsible','').replace('collapsible','');;
  }

  for (var i = 0; i < spans.length; i++) {
    if (spans[i].getAttribute('parent') === parent) {
      spans[i].className = wasOpen === true ? 'right-caret' : 'caret';
    }
  }
}

function toggleTab(showTabId, showDOMid, hideTabId, hideDOMid, hideTabId2, hideDOMid2) {
  if (hideTabId2 !== undefined) {
    document.getElementById(hideTabId2).className = '';
    document.getElementById(hideDOMid2).className = document.getElementById(hideDOMid2).className.replace(' hidden','');
    document.getElementById(hideDOMid2).className += ' hidden';
  }

  if (hideTabId !== undefined) {
    document.getElementById(hideTabId).className = '';
    document.getElementById(hideDOMid).className = document.getElementById(hideDOMid).className.replace(' hidden','');
    document.getElementById(hideDOMid).className += ' hidden';
  }

  document.getElementById(showTabId).className = 'active';
  document.getElementById(showDOMid).className = document.getElementById(showDOMid).className.replace(' hidden','');
}


function hideOptions(hideTabId1, hidePreId1, hideTabId2, hidePreId2) {
  document.getElementById(hideTabId1).className = '';
  document.getElementById(hidePreId1).className = document.getElementById(hidePreId1).className.replace(' hidden','');
  document.getElementById(hidePreId1).className += ' hidden';

  if (hideTabId2 !== undefined) {
    document.getElementById(hideTabId2).className = '';
    document.getElementById(hidePreId2).className = document.getElementById(hidePreId2).className.replace(' hidden','');
    document.getElementById(hidePreId2).className += ' hidden';
  }

}